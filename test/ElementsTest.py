from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys

driver = webdriver.Firefox(executable_path="geckodriver")
driver.get(sys.argv[1])
print(driver.title)

page = driver.find_element(By.TAG_NAME, 'html')

addElementForm = driver.find_element(By.ID, 'addElementForm')
addElementFieldIDs = ['atomno', 'symbol', 'name', 'colour1', 'colour2', 'colour3', 'radius']
addElementFields = []

for id in addElementFieldIDs:
    addElementFields.append(driver.find_element(By.ID, id))

test_elements = [
    ['10', 'Ne', 'Neon', 'FF0000', '00FF00', '0000FF', '35']
]

for element in test_elements:
    for field, field_value in zip(addElementFields, element):
        field.send_keys(field_value)
    addElementForm.submit()

    WebDriverWait(driver, 10).until(EC.staleness_of(page))
    elementsTable = driver.find_element(By.ID, 'elementsTable')
    rows = elementsTable.find_elements(By.TAG_NAME, 'tr')

    colors = ', '.join(element[3:6])
    expected_values = element[:3] + [colors] + element[6:]

    for row in rows:
        cells = row.find_elements(By.TAG_NAME, 'td')

        if len(cells) >= len(expected_values):
            cell_values = [cell.get_attribute('innerHTML') for cell in cells]
            for cell_value, expected_value in zip(cell_values, expected_values):
                print(f"cell_value {cell_value} {'==' if cell_value == expected_value else '!='} expected_value {expected_value}")

driver.quit()