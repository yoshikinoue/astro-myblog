from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to the posts page to see the disabled "Prev" pagination link
    page.goto("http://localhost:4321/posts")
    page.wait_for_timeout(500)

    # Locate the disabled "Prev" link which is present on page 1
    # It has the text "Prev" and an aria-label "Previous"
    prev_link = page.locator("nav[aria-label='Pagination'] a[aria-label='Previous']")

    # Hover over the "Prev" link
    prev_link.hover()
    page.wait_for_timeout(500)

    # Take a screenshot
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        os.makedirs("/home/jules/verification/videos", exist_ok=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
