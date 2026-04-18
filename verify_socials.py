import re
from playwright.sync_api import Page, expect, sync_playwright

def verify_socials(page: Page):
    page.goto("http://localhost:4321")
    expect(page.locator("text=Social Links:")).to_be_visible()

    # We should have github, linkedin, twitter active by default per config
    # Use first() because it appears in header and footer
    github_link = page.locator('a[aria-label=" 焼き芋ストロング on Github"]').first
    expect(github_link).to_be_visible()

    linkedin_link = page.locator('a[aria-label="焼き芋ストロング on LinkedIn"]').first
    expect(linkedin_link).to_be_visible()

    twitter_link = page.locator('a[aria-label="焼き芋ストロング on Twitter"]').first
    expect(twitter_link).to_be_visible()

    page.screenshot(path="verification_screenshot.png")
    print("Screenshot saved to verification_screenshot.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_socials(page)
        finally:
            browser.close()
