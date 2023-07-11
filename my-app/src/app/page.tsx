async function getData() {
  let fetchedData = {};
  try {
    const data = await fetch("http://flask:80", { cache: "no-store" });
    fetchedData = await data.json();
  } catch (err) {
    fetchedData = {
      error: err,
    };
  } finally {
    return fetchedData;
  }
}

export default async function Home() {
  let data: {
    message?: string;
    error?: string;
  } = await getData();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">{data.message || ""}</h1>
      </div>
    </main>
  );
}
