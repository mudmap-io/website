const EmbedVideo = ({video}) => {
  return (
    <>
      <div
        className="sm:my-10 my-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={video} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      </div>
    </>
  )
}

export default EmbedVideo;
