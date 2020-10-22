class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn() {
        return template.replace(/{{month}}/g, dictionary.month)
        .replace(/{{day}}/g, dictionary.day)
        .replace(/{{year}}/g, dictionary.year);
    }
}