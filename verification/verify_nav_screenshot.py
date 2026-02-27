from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        print("Navigating to http://localhost:4321/posts")
        page.goto("http://localhost:4321/posts")

        # Take a screenshot of the navigation area to visually verify the active state
        # (Though visual styling might not have changed, this confirms the page renders)
        header = page.locator("header")
        header.screenshot(path="verification_screenshot.png")
        print("Screenshot saved to verification_screenshot.png")

        browser.close()

if __name__ == "__main__":
    verify()
