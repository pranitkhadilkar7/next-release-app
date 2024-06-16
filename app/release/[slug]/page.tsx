export default function Release({ params }: { params: { slug: string } }) {
  return <h1>Welcome to Release Page: {params.slug}</h1>
}
