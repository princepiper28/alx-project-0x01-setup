import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">Posts Page</h1>
        <p>This is the posts page.</p>
      </main>
    </>
  );
};

export default Posts;
