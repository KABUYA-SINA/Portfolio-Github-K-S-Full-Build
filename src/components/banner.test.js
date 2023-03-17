import BannerText from "./BannerText";
import { render, screen } from "@testing-library/react";


describe('Banner Test', () => {
    test('Should render without crash',  async () => {
        render(<BannerText />)
    })
})
