import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import CtaButton from './CtaButton'

import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';

function DemonstrationSection() {
    const ctaButton = <CtaButton name={'Place Bid'} />
    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
            </SectionStyled>
            <div className="gradient-cards-con">
                <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
            </div>

        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div``

export default DemonstrationSection
