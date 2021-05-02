$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;1"
    },
    {
      "cells": [
        "abc123",
        "abc123"
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;2"
    },
    {
      "cells": [
        "ABC123",
        ""
      ],
      "line": 14,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;3"
    },
    {
      "cells": [
        "",
        "Abc12"
      ],
      "line": 15,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;4"
    },
    {
      "cells": [
        "abc123",
        "123456"
      ],
      "line": 16,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9127495800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"abc123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFuctions.userAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 173606000,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 2254466700,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 166527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterPasswordAs(String)"
});
formatter.result({
  "duration": 163551700,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInButton()"
});
formatter.result({
  "duration": 113723800,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.after({
  "duration": 935949200,
  "status": "passed"
});
formatter.before({
  "duration": 5658279700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"ABC123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFuctions.userAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 4237400,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 2876363100,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC123",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 163092900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterPasswordAs(String)"
});
formatter.result({
  "duration": 124745700,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInButton()"
});
formatter.result({
  "duration": 122128500,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.after({
  "duration": 802187000,
  "status": "passed"
});
formatter.before({
  "duration": 7783602500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"Abc12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFuctions.userAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 2415000,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 3303560300,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 95789400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc12",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterPasswordAs(String)"
});
formatter.result({
  "duration": 231182700,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInButton()"
});
formatter.result({
  "duration": 124483400,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.after({
  "duration": 1058277900,
  "status": "passed"
});
formatter.before({
  "duration": 6149776600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": User should not be able to login with invalid credential",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;:-user-should-not-be-able-to-login-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign in tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User am on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"abc123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sign in should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInFuctions.userAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 8418900,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInTab()"
});
formatter.result({
  "duration": 3611457100,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userAmOnSignInPage()"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterUsernameAs(String)"
});
formatter.result({
  "duration": 163310400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 24
    }
  ],
  "location": "SignInFuctions.userEnterPasswordAs(String)"
});
formatter.result({
  "duration": 154348400,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.userClickOnSignInButton()"
});
formatter.result({
  "duration": 111626000,
  "status": "passed"
});
formatter.match({
  "location": "SignInFuctions.signInShouldBeUnsuccessful()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.after({
  "duration": 864033500,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/Searchbar.feature");
formatter.feature({
  "line": 1,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5512660500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Search bar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"sports\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should able to read all articles related \u0027sports\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TeamsRecordList.iAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 8109200,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarFunction.iClickOnSearchBar()"
});
formatter.result({
  "duration": 3167725600,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarFunction.iAmOnSearchPage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sports",
      "offset": 9
    }
  ],
  "location": "SearchbarFunction.iEnterInTheSearchBar(String)"
});
formatter.result({
  "duration": 148911600,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarFunction.iClickOnTheSearchIconButton()"
});
formatter.result({
  "duration": 1470174100,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarFunction.iShouldAbleToReadAllArticlesRelatedSports()"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.after({
  "duration": 1295904600,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/TeamsRecord.feature");
formatter.feature({
  "line": 1,
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8980426600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Output all team names with a match today. If there are no matches today, output a message to convey this.",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today;output-all-team-names-with-a-match-today.-if-there-are-no-matches-today,-output-a-message-to-convey-this.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on www.bbc.co.uk hopepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sport tab header",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on now sport webpage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Football tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Score \u0026 Fixtures",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Today",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see all team names with a match today",
  "keyword": "Then "
});
formatter.match({
  "location": "TeamsRecordList.iAmOnWwwBbcCoUkHopepage()"
});
formatter.result({
  "duration": 6861000,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iClickOnSportTabHeader()"
});
formatter.result({
  "duration": 6201907200,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iAmOnNowSportWebpage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iClickOnFootballTab()"
});
formatter.result({
  "duration": 1867841900,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iClickOnScoreFixtures()"
});
formatter.result({
  "duration": 1476182200,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iClickOnToday()"
});
formatter.result({
  "duration": 2490245700,
  "status": "passed"
});
formatter.match({
  "location": "TeamsRecordList.iShouldBeAbleToSeeAllTeamNamesWithAMatchToday()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.after({
  "duration": 859065600,
  "status": "passed"
});
});