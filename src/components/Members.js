import React from 'react'
import Grid from '../components/Grid'
import GridRow from '../components/GridRow'
import GridItem from '../components/GridItem'

const Members = props => (
  <Grid title="Our Members">
    <GridRow>
      <GridItem
        item_icon="fa-code"
        item_title="Member A"
        item_description="
                        Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                        consequat tempus veroeros sed consequat."
      />
      <GridItem
        item_icon="fa-copy"
        item_title="Hisean Valdez"
        item_description="Software Architect | 'Current Project'"
      />
      <GridItem
        item_icon="fa-diamond"
        item_title="Member C"
        item_description="
                        Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                        consequat tempus veroeros sed consequat."
      />
      <GridItem
        item_icon="fa-code"
        item_title="Member D"
        item_description="
                        Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                        consequat tempus veroeros sed consequat."
      />
      <GridItem
        item_icon="fa-copy"
        item_title="Member E"
        item_description="
                        Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                        consequat tempus veroeros sed consequat."
      />
      <GridItem
        item_icon="fa-diamond"
        item_title="Member F"
        item_description="
                        Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                        consequat tempus veroeros sed consequat."
      />
    </GridRow>
  </Grid>
)

export default Members
