import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardDisplay = ({ data }) => {
  return (
    <Card sx={{ minWidth: 105 }}>
      {data.map((item, index) => (
        <CardContent key={index}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`${item.firstName} ${item.middleName} ${item.lastName}`}
          </Typography>
          <Typography variant="h5" component="div">
            {`${item.collegeName} - ${item.course}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${item.collegeId}`}
          </Typography>
          <Typography variant="body2">{item.email}</Typography>
        </CardContent>
      ))}
    </Card>
  );
};

export default CardDisplay;
