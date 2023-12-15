export async function POST() {
  const data = await request.formData();
  console.log(data);
}

export async function GET() {
  return {
    body: {
      message: "hello world",
    },
  };
}
