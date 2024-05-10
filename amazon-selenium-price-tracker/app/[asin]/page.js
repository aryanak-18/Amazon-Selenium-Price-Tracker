import React from "react";
import Navbar from "../components/Navbar";
import DisplayChart from "../components/DisplayChart";
import { MongoClient } from "mongodb";

//Connection URL
const url = "mongodb+srv://aryan:aryan@cluster0.3kemdsv.mongodb.net/";
const client = new MongoClient(url);

//Database Name
const dbName = "amazon";

export default async function Page({ params }) {
    


  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("prices");

  let asin = params.asin;
  const data = await collection
    .aggregate([
      {
        $match: {
          asin: asin.toUpperCase(),
        },
      },
      {
        $sort: {
          time: 1,
        },
      },
      {
        $group: {
          _id: "$asin",
          data: {
            $push: {
              time: { $dayOfMonth: "$time" },
              price: { $toInt: "$priceInt" },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          label: "Product",
          data: "$data",
        },
      },
    ])
    .toArray();

  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="mx-auto p-9 w-fit font-bold">
        Track price for: {params.asin}
        <DisplayChart data={data} />
      </div>
    </div>
  );
}
