type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Training GitHubActions</p>
      <p>Welcome to GitHubAction</p>
    </>
  );
}
