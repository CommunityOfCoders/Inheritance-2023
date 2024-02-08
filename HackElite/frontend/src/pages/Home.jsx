import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useAuth from "../hooks/useAuth";
import axiosClient from "../api/axiosClient";
import Loading from "../components/Loading";
const Home = () => {
  const [urls, setUrls] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();

  const fetchUrls = async () => {
    if (auth) {
      const resp = await axiosClient.get("/api/v1/video/get");
      let data = resp.data;
      setUrls(data);
    }
  };

  const handleRemove = async (id) => {
    await axiosClient.delete(`/api/v1/video/deleteUrl/${id}`);
    fetchUrls();
  };

  const handleDownload = (url) => {
    setIsLoading(true);
    axiosClient
      .post(
        "http://localhost:3000/",
        { url: url },
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        // Create a Blob from the received data
        const blob = new Blob([response.data], { type: "application/zip" });

        // Use createObjectURL to generate a URL for the blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a link and trigger a download
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", "pdf_files.zip");

        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b py-14">
        {/* Displaying the urls. */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {urls?.map((video) => (
              <Card
                key={video.videoId}
                title={video.title}
                description={video.description}
                thumbnailUrl={video.thumbnailUrl}
                onRemove={() => handleRemove(video._id)}
                onDownload={() => handleDownload(video.url)}
              />
            ))}
          </div>
        </div>
      </section>
      <Loading isLoading={isLoading} />;
    </>
  );
};

export default Home;
