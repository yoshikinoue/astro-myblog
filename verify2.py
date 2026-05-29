import re
import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:4321/posts")
    page.wait_for_selector(".pagination-wrapper")

    # Check Prev button which should be disabled on first page
    prev_button = page.locator("a[aria-label='Previous']")

    # Wait for hydration/rendering completely
    time.sleep(1)

    print(prev_button.get_attribute("class"))
    print(prev_button.get_attribute("href"))
    print(prev_button.evaluate("element => window.getComputedStyle(element).getPropertyValue('cursor')"))

    browser.close()
