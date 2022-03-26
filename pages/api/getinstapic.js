/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  // https://api.instagram.com/oembed/?url=<your-url>
//   const url =
//     "https://api.instagram.com/oembed/?url=https://www.instagram.com/p/CbDQ6sQoyM3/";
//   const url2 =
//     "https://api.instagram.com/oembed/?url=https://www.instagram.com/p/CbCoammoPvH/?utm_source=ig_web_copy_link";

//   const response = await fetch(url);

//   if (response.status === 200) {
//     const data = await response.json();
//     console.log(data.thumbnail_url);
//     res.status(200).json({ link: data.thumbnail_url });
//   } else {
//     res.status(404).json("Failed to load");
//   }

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
