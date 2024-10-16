import { NextResponse } from 'next/server';

import DataStore from '@seald-io/nedb';

import products from '@/db/products.json';

// create a new in-memory database
const db = new DataStore();
// insert all products into the database
const documents = products.map(prod => {
  return db.insertAsync(prod);
});

export async function GET(req: Request) {
  await documents;
  const url = new URL(req.url);
  const filterStr = url.searchParams.get('filters');
  console.log(filterStr);

  const queries = filterStr?.split(',').map(condition => {
    const [field, operator, value] = condition.split('-');
    if (operator === 'eq') {
      return { [field]: value };
    } else {
      return { [field]: { [`$${operator}`]: value } };
    }
  });

  const query = queries?.length ? { $or: queries } : {};
  const products = await db.find(query);

  return NextResponse.json(products);
}
