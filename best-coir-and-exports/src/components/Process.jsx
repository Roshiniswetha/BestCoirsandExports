import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import {CocoDryingFarm, Coconut, CoconutCrushing, Logistics, CocoPeatCompost, Screening, Cocos, CocoSealed, QualityCheck} from '../assets/images'

function Process() {
  return (
    <div>
    <Container maxWidth={false} disableGutters={true}>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                    <img
                    src={Coconut}
                    alt="RAW MATERIAL"
                    style={{ width: '40%', height: 'auto' }}
                    />
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    1. RAW MATERIAL
                    </Typography>
                    <Typography variant="body1" component="div">
                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
            <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">         
                    2. CRUSHING
                    </Typography>
                    <Typography variant="body1" component="div">
                    Our specialized Coir Beater machine is where the raw coconut husks are broken down and the fibre is extracted using a beating principle.
                    </Typography>
                </div>
                    <img
                    src={CoconutCrushing}
                    alt="CRUSHING"
                    style={{ width: '50%', height: 'auto' }}
                    />

          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                    <img
                    src={CocoPeatCompost}
                    alt="PITH EXTRACTION"
                    style={{ width: '40%', height: 'auto' }}
                    />
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    3. PITH EXTRACTION
                    </Typography>
                    <Typography variant="body1" component="div">
                    The Coir Beater takes the coconut husk pieces and separates the pith from the fibre. The machine’s outlet conveyor then extracts fresh coconut pith.                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
            <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">         
                    4. SCREENING
                    </Typography>
                    <Typography variant="body1" component="div">
                    The extracted pith passes through the screener and it is tested by our experienced staff to ensure only the highest quality move onto the manufacturing process.                    Our specialized Coir Beater machine is where the raw coconut husks are broken down and the fibre is extracted using a beating principle.
                    </Typography>
                </div>
                    <img
                    src={Screening}
                    alt="SCREENING"
                    style={{ width: '50%', height: 'auto' }}
                    />

          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                    <img
                    src={Cocos}
                    alt="WASHING"
                    style={{ width: '40%', height: 'auto' }}
                    />
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    5. WASHING
                    </Typography>
                    <Typography variant="body1" component="div">
                    Our washing bunkers are used to reduce the default salt contents of the coir pith and extra washed to remove the excess elements. Our extensive washing process, done through a specialised sprinkling system, continues over multiple weeks to reach accurate EC and pH values as per RHP standards.                    The Coir Beater takes the coconut husk pieces and separates the pith from the fibre. The machine’s outlet conveyor then extracts fresh coconut pith.                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    6. DRYING
                    </Typography>
                    <Typography variant="body1" component="div">
                        The washed pith is then naturally sun-dried in our large cement yards. The pith then moves through our advanced drying machine to ensure the material is free from all types of weeds and harmful pathogens.                     The Coir Beater takes the coconut husk pieces and separates the pith from the fibre. The machine’s outlet conveyor then extracts fresh coconut pith.                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
                <img
                    src={CocoDryingFarm}
                    alt="DRYING"
                    style={{ width: '40%', height: 'auto' }}
                    />
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                    <img
                    src={Cocos}
                    alt="COMPRESSING"
                    style={{ width: '40%', height: 'auto' }}
                    />
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    7. COMPRESSING
                    </Typography>
                    <Typography variant="body1" component="div">
                    Once the pith is dried, it is taken from the drying yards and fed into the compressing machines. In order to achieve highest efficiency for our growers, the dried materials are compressed into 325 gms, 375 gms, 500 gms, 650 gms briquettes, 5kgs blocks or into compact grow slabs.                   The Coir Beater takes the coconut husk pieces and separates the pith from the fibre. The machine’s outlet conveyor then extracts fresh coconut pith.                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
            <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">         
                    8. QUALITY CHECK
                    </Typography>
                    <Typography variant="body1" component="div">
                    The compressed blocks then go through an intensive checking process. Our quality control team helps us deliver our very best to you by ensuring our products are free from impurities like weeds, stones, sand, and pathogens.                    The extracted pith passes through the screener and it is tested by our experienced staff to ensure only the highest quality move onto the manufacturing process.                    Our specialized Coir Beater machine is where the raw coconut husks are broken down and the fibre is extracted using a beating principle.
                    </Typography>
                </div>
                    <img
                    src={QualityCheck}
                    alt="QUALITY CHECK"
                    style={{ width: '50%', height: 'auto' }}
                    />

          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
                    <img
                    src={CocoSealed}
                    alt="PALLETISING"
                    style={{ width: '40%', height: 'auto' }}
                    />
                <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">
                    9. PALLETISING
                    </Typography>
                    <Typography variant="body1" component="div">
                    The compressed blocks are then packed into UV bags that are carefully arranged in disinfected wooden pallets to maintain hygiene levels. We use 40-foot high-cube containers or dry vans for transportation of our packaged products                    Once the pith is dried, it is taken from the drying yards and fed into the compressing machines. In order to achieve highest efficiency for our growers, the dried materials are compressed into 325 gms, 375 gms, 500 gms, 650 gms briquettes, 5kgs blocks or into compact grow slabs.                   The Coir Beater takes the coconut husk pieces and separates the pith from the fibre. The machine’s outlet conveyor then extracts fresh coconut pith.                        Our raw materials are sourced from the traditional coconut tree cultivators of our locality. These raw materials are thoroughly checked for quality and only the best enters our warehouse for storing.
                    </Typography>
                </div>
          </Paper>
          <Paper style={{ display: 'flex', marginTop: '40px' }} elevation={0}>
            <div style={{ flex: 1, padding: '36px' }}>
                    <Typography variant="h3" component="div">         
                    10. LOGISTICS & SHIPPING
                    </Typography>
                    <Typography variant="body1" component="div">
                    The full containers then travel directly from our facilities by road and sea to reach our grower’s across the world.
                    </Typography>
                </div>
                    <img
                    src={Logistics}
                    alt="LOGISTICS & SHIPPING"
                    style={{ width: '50%', height: 'auto' }}
                    />

          </Paper>
      </Container>
      </div>
  )
}

export default Process