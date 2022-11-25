import { Stack, Box } from "@mui/material"
import { ChannelCard, VideoCard } from "./"


const Videos = ({ videos, direction }) => {
  // console.log(videos) comes up twice

  console.log(videos)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>

      {videos.map((item, index) => (
        !item.id.playlistId && <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos
