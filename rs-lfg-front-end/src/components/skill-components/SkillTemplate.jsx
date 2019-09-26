import React from 'react'
import styled from 'styled-components'
import SkillColumn from './SkillColumn'
import IconLevel from './IconLevel'

import AttackPng from '../../images/Attack-icon.png'
import StrengthPng from '../../images/Strength-icon.png'
import DefencePng from '../../images/Defence-icon.png'
import HpPng from '../../images/Constitution-icon.png'
import RangedPng from '../../images/Ranged-icon.png'
import PrayerPng from '../../images/Prayer-icon.png'
import MagicPng from '../../images/Magic-icon.png'
import CookingPng from '../../images/Cooking-icon.png'
import WcPng from '../../images/Woodcutting-icon.png'
import FletchingPng from '../../images/Fletching-icon.png'
import FishingPng from '../../images/Fishing-icon.png'
import FmPng from '../../images/Firemaking-icon.png'
import CraftingPng from '../../images/Crafting-icon.png'
import SmithingPng from '../../images/Smithing-icon.png'
import MiningPng from '../../images/Mining-icon.png'
import HerblorePng from '../../images/Herblore-icon.png'
import AgilityPng from '../../images/Agility-icon.png'
import ThievingPng from '../../images/Thieving-icon.png'
import SlayerPng from '../../images/Slayer-icon.png'
import FarmingPng from '../../images/Farming-icon.png'
import RcPng from '../../images/Runecrafting-icon.png'
import HunterPng from '../../images/Hunter-icon.png'
import ConstructionPng from '../../images/Construction-icon.png'
import SummoningPng from '../../images/Summoning-icon.png'
import DungeoneeringPng from '../../images/Dungeoneering-icon.png'
import DivinationPng from '../../images/Divination-icon.png'
import InventionPng from '../../images/Invention-icon.png'







const StyledTemplate = styled.div`
    background-color: dark-blue;
`

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const SkillTemplate = props => (
    <StyledTemplate>
        <StyledRow>
            <SkillColumn
                row1={<IconLevel icon={AttackPng} level={75} />}
                row2={<IconLevel icon={StrengthPng} level={75} />}
                row3={<IconLevel icon={DefencePng} level={75} />}
                row4={<IconLevel icon={HpPng} level={75} />}
                row5={<IconLevel icon={RangedPng} level={75} />}
            />

            <SkillColumn
                row1={<IconLevel icon={PrayerPng} level={75} />}
                row2={<IconLevel icon={MagicPng} level={75} />}
                row3={<IconLevel icon={CookingPng} level={75} />}
                row4={<IconLevel icon={WcPng} level={75} />}
                row5={<IconLevel icon={FletchingPng} level={75} />}
            />

            <SkillColumn
                row1={<IconLevel icon={FishingPng} level={75} />}
                row2={<IconLevel icon={FmPng} level={75} />}
                row3={<IconLevel icon={CraftingPng} level={75} />}
                row4={<IconLevel icon={SmithingPng} level={75} />}
                row5={<IconLevel icon={MiningPng} level={75} />}
            />

            <SkillColumn
                row1={<IconLevel icon={HerblorePng} level={75} />}
                row2={<IconLevel icon={AgilityPng} level={75} />}
                row3={<IconLevel icon={ThievingPng} level={75} />}
                row4={<IconLevel icon={SlayerPng} level={75} />}
                row5={<IconLevel icon={FarmingPng} level={75} />}
            />

            <SkillColumn
                row1={<IconLevel icon={RcPng} level={75} />}
                row2={<IconLevel icon={HunterPng} level={75} />}
                row3={<IconLevel icon={ConstructionPng} level={75} />}
                row4={<IconLevel icon={SummoningPng} level={75} />}
                row5={<IconLevel icon={DungeoneeringPng} level={75} />}
            />

            <div>smol column here plus combat stuff</div>
        </StyledRow>
    </StyledTemplate>
)

export default SkillTemplate