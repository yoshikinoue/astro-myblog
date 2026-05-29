import re
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:4321/posts")
    page.wait_for_selector(".pagination-wrapper")

    # Check Prev button which should be disabled on first page
    prev_button = page.locator("a[aria-label='Previous']")
    assert prev_button.get_attribute("href") is None, "Disabled button should not have an href"
    assert prev_button.get_attribute("title") == "No previous pages"

    cursor = prev_button.evaluate("element => window.getComputedStyle(element).cursor")
    assert cursor == "not-allowed", "Disabled button should have not-allowed cursor"

    browser.close()
