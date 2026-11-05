from playwright.sync_api import sync_playwright

def test_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the locally running app
        page.goto('http://localhost:5173')

        # Wait for potential initial network requests
        page.wait_for_timeout(2000)

        # Take screenshot of home
        page.screenshot(path='home_updated.png', full_page=True)

        # Navigate to products
        page.goto('http://localhost:5173/products')
        page.wait_for_timeout(2000)
        page.screenshot(path='products_updated.png', full_page=True)

        # Add item to cart to check it works
        page.click("button:has-text('Add to Cart')")
        page.wait_for_timeout(1000)

        # Navigate to Cart
        page.goto('http://localhost:5173/cart')
        page.wait_for_timeout(2000)
        page.screenshot(path='cart_updated.png', full_page=True)

        browser.close()

if __name__ == '__main__':
    test_app()
