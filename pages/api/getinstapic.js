/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  if (req.method === "POST") {
    const image_url = req.body.image;
    const url = `https://api.instagram.com/oembed/?url=${image_url}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.thumbnail_url);
      res.status(200).json({ link: data.thumbnail_url });
    } catch (error) {
      res.status(404).json(`Error: ${error.message}`);
    }
  }
};
