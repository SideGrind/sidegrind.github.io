import React from 'react'
import Grid from '../components/Grid'
import GridRow from '../components/GridRow'
import TestAvatar from '../assets/images/TestAvatar.png'
import TestAvatar2 from '../assets/images/TestAvatar2.png'
import { Link } from 'gatsby'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const MemberLists = [
  {
    name: 'Shiela Mae Bobadilla',
    text: 'Underwater and Confused',
    avatar: TestAvatar,
  },
  {
    name: 'Hisean Valdez',
    text: "Software Architect | 'Current Project'",
    avatar: TestAvatar,
  },
  { name: 'Clarice Pocot', text: 'Umawra', avatar: TestAvatar2 },
  { name: 'Member D', text: 'Sample Text', avatar: TestAvatar },
  { name: 'Member E', text: 'Sample Text', avatar: TestAvatar },
  { name: 'Member F', text: 'Sample Text', avatar: TestAvatar },
  { name: 'Member G', text: 'Sample Text', avatar: TestAvatar },
  { name: 'Member H', text: 'Sample Text', avatar: TestAvatar },
  { name: 'Member I', text: 'Sample Text', avatar: TestAvatar },
]

const Members = () => (
  <Grid title="Our Members">
    <GridRow>
      {MemberLists.map(Member => (
        <Link to="/generic">
          <Card>
            <CardMedia
              component="img"
              image={Member.avatar}
              title="Test alt text"
            />
            <CardContent>
              <Typography variant="h5">{Member.name}</Typography>
              <Typography variant="body2">{Member.text}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </GridRow>
  </Grid>
)

export default Members
