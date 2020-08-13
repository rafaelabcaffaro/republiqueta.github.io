driver = webdriver.Chrome(executable_path="/Users/vatsu/Work/automate/chromedriver")

search_items = ["Ebazar","Mercadolivre.com","5632/19","45577","Campetti","299.834","5491/19","44510","5494/19","44511"]

for item in search_items:
    driver.get('https://www.imprensaoficial.com.br/DO/BuscaDO2001_11_2.aspx')

    search_text = driver.find_element_by_id("txtPalavrasChave")

    search_text.send_keys(item)

    all_sections = driver.find_element_by_id("content_content_content_chkGrupos_0")
    all_sections.click()

    since = driver.find_element_by_id("txtDataInicio")
    since.clear()
    since.send_keys("09/07/2020")

    until = driver.find_element_by_id("txtDataFim")
    until.clear()
    until.send_keys("10/07/2020")

    driver.find_element_by_xpath("//*[@id='content_content_content_btnBuscar']").click()

    try:
        close_popup = driver.find_element_by_xpath("/html/body/div[1]/div/a[2]")
        time.sleep(5)
        close_popup.click()
        image = driver.find_element_by_xpath("//*[@id='form1']/div[3]/div/div[2]")
    except NoSuchElementException:
        image = driver.find_element_by_xpath("//*[@id='form1']/div[3]/div/div")

    name = item.replace("/","_") + "-10072020.png"
    image.screenshot(name)

    driver.quit()
