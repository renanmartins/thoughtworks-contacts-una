describe('ThoughtWorks Contacts', function() {
  var groups;

  beforeEach(function () {
    browser.get('#');
    groups = element.all(by.repeater('(group,contacts) in groups'));
  });

  it('should group existent contacts alphabetically', function() {
    expect(groups.count()).toBe(4);
    expect(getGroupName(0)).toEqual('A');
    expect(getGroupName(1)).toEqual('P');
    expect(getGroupName(2)).toEqual('R');
    expect(getGroupName(3)).toEqual('T');
  });

  it('should contain correct contacts in each group', function() {
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