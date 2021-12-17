import React from "react";
import styled from "styled-components";
import { InnerLayouts } from "../Layouts";
import BlogSection from "./BlogSection";
import MainTitle from "./MainTitle";
import SellerCard from "./SellerCard";
import GradientCardsSection from "./GradientCardsSection";
import DemonstrationSection from "./DemonstrationSection";
import ContactSection from "./ContactSection";

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayouts>
                <MainTitle
                    title={"Top Sellers This Month"}
                    subtitle={"All Entrepreneurs"}
                />
                <div className='sellercards'>
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
                <BlogSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayouts>
            <ContactSection />
            <footer>
                <p>Copyright ©YourName. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    );
}
const BodyContentStyled = styled.main`
    .sellercards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        background-color: #020a27;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p {
            opacity: 0.4;
            text-align: center;
        }
    }
`;
export default BodyContent;
