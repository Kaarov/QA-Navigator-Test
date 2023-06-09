class EditSearchPage {
    get age () { return $('[class="options-select age"]') };
    get choose_age_first () { return $('[class="option age identified"]') };
    get channel_registration () { return $('<app-client-registration-channel-filter>') };
    get choose_chan_regist_first () { return $('[class="option gender ng-star-inserted"]') };
    get loyality_level () { return $('<app-client-loyality-level-filter>') };
    get choose_loyal_level_first () { return $('[for="mat-checkbox-53-input"]') };
    get choose_loyal_level_second () { return $('[for="mat-checkbox-54-input"]') };
    get gender () { return $('<app-client-sex-filter>') };
    get choose_gender_first () { return $('[class="option gender"]') };
    get saveButton () { return $('button[class="bold mat-button"]') }

    async open(){
        await $('[class="mat-input-element mat-form-field-autofill-control ng-pristine ng-valid ng-touched"]').click();
        await browser.pause(5000);
    }

    async editSearchClient (){
        // Возраст
        await this.age.click();
        await this.choose_age_first.click();
        await this.age.click();
        await browser.pause(3000);

        // Канал регистрации
        await this.channel_registration.click();
        await this.choose_chan_regist_first.click();
        await this.channel_registration.click();
        await browser.pause(3000);

        // Уровень лояльности
        // await this.loyality_level.click();
        // await this.choose_loyal_level_first.click();
        // await browser.pause(1000);
        // await this.choose_loyal_level_second.click();
        // await this.loyality_level.click();
        // await browser.pause(3000);

        // Пол
        await this.gender.click();
        await this.choose_gender_first.click();
        await this.gender.click();
        await browser.pause(3000);

        await this.saveButton.click();
        await browser.pause(3000);
        await expect(browser).toHaveUrlContaining('clients');
    }
}

module.exports = new EditSearchPage();