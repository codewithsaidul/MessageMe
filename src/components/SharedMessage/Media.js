import { faker } from '@faker-js/faker'
import { Grid } from '@mui/material'


const Media = () => {
  return (
    <Grid container spacing={2}>
        {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
                <Grid item xs={4}>
                    <img src={ faker.image.avatar()} alt={ faker.name.firstName()} />
                </Grid>
            })
        }
    </Grid>
  )
}

export default Media