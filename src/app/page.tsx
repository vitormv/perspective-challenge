import funnel from 'src/content/funnel.example.json';

async function getData() {
  return { funnel };
}

export default async function Home() {
  const { funnel } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`w-[375px] h-[600px]`} style={{ backgroundColor: funnel.bgColor }}>
        {funnel.pages.map((page) => (
          <div></div>
        ))}
      </div>
    </main>
  );
}
