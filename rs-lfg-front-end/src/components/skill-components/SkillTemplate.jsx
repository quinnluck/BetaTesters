import React from 'react'
import styled from 'styled-components'
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
    border: 1px solid #000;
    border-radius: 2.5px;
    background: #CCD2A1;
    background: -moz-radial-gradient(center, #CCD2A1 0%, #737C5A 50%, #252525 100%);
    background: -webkit-radial-gradient(center, #CCD2A1 0%, #737C5A 50%, #252525 100%);
    background: radial-gradient(ellipse at center, #CCD2A1 0%, #737C5A 50%, #252525 100%);
`

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const StyledColumn = styled.div`
    display: flex;
    padding-right: 5px;
    padding-left: 5px;
    border-right: 1px solid #000;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const CharacterColumn = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-right: 5px;
    padding-left: 5px;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const CharacterRow = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Lucida Sans Unicode";
    font-size: 12px;
    font-variant: small-caps;
    width: max-content;
`

const CharacterName = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: max-content;
`

const SkillTemplate = props => (
    <StyledTemplate {...props}>
        <StyledRow>
            <StyledColumn>
                <StyledRow><IconLevel icon={AttackPng} level={props.attacklvl}/></StyledRow>
                <StyledRow><IconLevel icon={StrengthPng} level={props.strengthlvl} /></StyledRow>
                <StyledRow><IconLevel icon={DefencePng} level={props.defencelvl} /></StyledRow>
                <StyledRow><IconLevel icon={HpPng} level={props.hplvl} /></StyledRow>
                <StyledRow><IconLevel icon={RangedPng} level={props.rangedlvl} /></StyledRow>
                <StyledRow><IconLevel icon={PrayerPng} level={props.prayerlvl} /></StyledRow>
            </StyledColumn>
            
            <StyledColumn>
                <StyledRow><IconLevel icon={MagicPng} level={props.magiclvl} /></StyledRow>
                <StyledRow><IconLevel icon={CookingPng} level={props.cookinglvl} /></StyledRow>
                <StyledRow><IconLevel icon={WcPng} level={props.wclvl} /></StyledRow>
                <StyledRow><IconLevel icon={FletchingPng} level={props.fletchinglvl} /></StyledRow>
                <StyledRow><IconLevel icon={FishingPng} level={props.fishinglvl} /></StyledRow>
                <StyledRow><IconLevel icon={FmPng} level={props.fmlvl} /></StyledRow>
            </StyledColumn>

            <StyledColumn>
                <StyledRow><IconLevel icon={CraftingPng} level={props.craftinglvl} /></StyledRow>
                <StyledRow><IconLevel icon={SmithingPng} level={props.smithinglvl} /></StyledRow>
                <StyledRow><IconLevel icon={MiningPng} level={props.mininglvl} /></StyledRow>
                <StyledRow><IconLevel icon={HerblorePng} level={props.herblorelvl} /></StyledRow>
                <StyledRow><IconLevel icon={AgilityPng} level={props.agilitylvl} /></StyledRow>
                <StyledRow><IconLevel icon={ThievingPng} level={props.thievinglvl} /></StyledRow>
            </StyledColumn>

            <StyledColumn>
                <StyledRow><IconLevel icon={SlayerPng} level={props.slayerlvl} /></StyledRow>
                <StyledRow><IconLevel icon={FarmingPng} level={props.farminglvl} /></StyledRow>
                <StyledRow><IconLevel icon={RcPng} level={props.rclvl} /></StyledRow>
                <StyledRow><IconLevel icon={HunterPng} level={props.hunterlvl} /></StyledRow>
                <StyledRow><IconLevel icon={ConstructionPng} level={props.constructionlvl} /></StyledRow>
                <StyledRow><IconLevel icon={SummoningPng} level={props.summoninglvl} /></StyledRow>
            </StyledColumn>

            <StyledColumn>
                <StyledRow><IconLevel icon={DungeoneeringPng} level={props.dunglvl} /></StyledRow>
                <StyledRow><IconLevel icon={DivinationPng} level={props.divlvl} /></StyledRow>
                <StyledRow><IconLevel icon={InventionPng} level={props.inventionlvl} /></StyledRow>
            </StyledColumn>

            <CharacterColumn>
                <CharacterName>{props.characterName}</CharacterName>
                <CharacterRow>{`Combat Level: ${props.combatlvl}`}</CharacterRow>
                <CharacterRow>{`Total Level: ${props.characterTotal}`}</CharacterRow>
                <CharacterRow>{`Total XP: ${props.characterXp}`}</CharacterRow>
            </CharacterColumn>
        </StyledRow>
    </StyledTemplate>
)

export default SkillTemplate