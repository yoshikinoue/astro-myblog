import sys
import time
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Check /posts page
        try:
            print("Navigating to http://localhost:4321/posts")
            page.goto("http://localhost:4321/posts")

            # Check lang attribute
            lang = page.evaluate("document.documentElement.lang")
            print(f"Current lang attribute: {lang}")

            if lang != "ja":
                print(f"FAIL: Expected lang='ja', got '{lang}'")
                sys.exit(1)
            else:
                print("PASS: lang is 'ja' (correct)")

            # Check aria-current on Posts link
            # The posts link is <a href="/posts" class="active">Posts</a>
            # We want to verify it DOES have aria-current="page" now
            posts_link = page.locator('nav a[href="/posts"]')
            aria_current = posts_link.get_attribute("aria-current")
            print(f"Current aria-current on Posts link: {aria_current}")

            if aria_current != "page":
                 print(f"FAIL: Expected aria-current='page', got '{aria_current}'")
                 sys.exit(1)
            else:
                 print("PASS: Posts link has aria-current='page' (correct)")

        except Exception as e:
            print(f"An error occurred: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    verify()
