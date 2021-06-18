// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const data = JSON.parse(req.body);
  console.log(data);
  res.status(200).json({ name: "John Doe" });
};
