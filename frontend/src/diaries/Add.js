import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
const Add = () => {
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      <form>
        <Box
          padding={3}
          display="flex"
          width="80%"
          margin="auto"
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField name="title" variant="standard" margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField name="description" variant="standard" margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField name="imageUrl" variant="standard" margin="normal" />

          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField name="location" variant="standard" margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
            type="date"
            name="date"
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            color="warning"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
