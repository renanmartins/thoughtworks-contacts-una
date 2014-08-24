describe('ThoughtWorks Contacts', function() {
  var groups;

  beforeEach(function () {
    browser.get('#');
  });

  it('should group existent contacts alphabetically', function() {
    groups = element.all(by.repeater('(group,contacts) in groups'));

    expect(groups.count()).toBe(4);
    expect(getGroupName(0)).toEqual('A');
    expect(getGroupName(1)).toEqual('P');
    expect(getGroupName(2)).toEqual('R');
    expect(getGroupName(3)).toEqual('T');
  });

  it('should contain correct contacts in each group', function() {
    groups = element.all(by.repeater('(group,contacts) in groups'));

    getGroupContacts(0).then(function(contacts) {
      expect(contacts[0].getText()).toEqual('Anabela');
    });
    getGroupContacts(1).then(function(contacts) {
      expect(contacts[0].getText()).toEqual('Paulo Brito');
      expect(contacts[1].getText()).toEqual('Pedro Legal');
    });
    getGroupContacts(2).then(function(contacts) {
      expect(contacts[0].getText()).toEqual('Renan Martins');
    });
    getGroupContacts(3).then(function(contacts) {
      expect(contacts[0].getText()).toEqual('Tania Gonzales');
    });
  });

  it('should add new contact', function() {
    element(by.model('contactdata.name')).sendKeys('Ricardo Amorim');
    element(by.model('contactdata.phone')).sendKeys('5198765432');
    element(by.model('contactdata.email')).sendKeys('ramorim@thoughtworks.com');
    element(by.buttonText('Save')).click();

    groups = element.all(by.repeater('(group,contacts) in groups'));
    expect(groups.count()).toBe(4);
    getGroupContacts(2).then(function(contacts) {
      expect(contacts.length).toBe(2);
      expect(contacts[0].getText()).toEqual('Renan Martins');
      expect(contacts[1].getText()).toEqual('Ricardo Amorim');
    });
  });

  var getGroupName = function(index) {
    return getGroup(index).findElement(by.binding('group')).getText();
  };

  var getGroupContacts = function(index) {
    return getGroup(index).findElements(by.repeater('contact in contacts'));
  };

  var getGroup = function(index) {
    return groups.get(index);
  };

});