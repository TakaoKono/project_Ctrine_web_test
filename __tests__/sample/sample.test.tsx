import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SamplePage from '@/app/sample/page'

describe("サンプルテスト", () => {
    it("Sampleページが表示されていること", () => {
        render(<SamplePage />);

        expect(screen.getByText("Sampleページ")).toBeInTheDocument();
    });
})