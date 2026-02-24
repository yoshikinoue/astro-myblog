from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:4321/")

        # Locate the footer
        footer = page.locator("footer")
        footer.scroll_into_view_if_needed()

        # Locate the separator
        separator = footer.locator(".separator")

        # Check if aria-hidden is true
        aria_hidden = separator.get_attribute("aria-hidden")
        print(f"Separator aria-hidden: {aria_hidden}")

        if aria_hidden != "true":
            print("FAILED: Separator missing aria-hidden='true'")
            exit(1)

        # Take screenshot of footer
        footer.screenshot(path="verification_screenshot.png")
        print("Screenshot saved to verification_screenshot.png")

        browser.close()

if __name__ == "__main__":
    run()
