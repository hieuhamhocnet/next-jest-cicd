import { Metadata } from 'next';

// ⚠️ Đổi tên từ Props → PageProps
type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Training GitHub Actions</p>
      <p>Welcome to GitHub Action</p>
    </>
  );
}
