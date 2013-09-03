angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("angular/books.html",
    "<!-- With $resource\n" +
    "\n" +
    "<ul class=\"books\">\n" +
    "  <li class=\"panel\" ng-repeat=\"book in books\">\n" +
    "    {{ book.title }} by {{ book.author }}\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<!-- With $http\n" +
    "\n" +
    "Note the extra 'books.data', which is needed because $resource does fancy promise resolution\n" +
    "when attached to a controller scope\n" +
    "-->\n" +
    "\n" +
    "<p id=\"bookServiceVersion\">{{appversion.data.version}} </p>\n" +
    "<ul class=\"books\">\n" +
    "  <li class=\"panel\" ng-repeat=\"book in books\">\n" +
    "    {{ book.title }} by {{ book.author }}\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n"
  );

  $templateCache.put("angular/company.html",
    "<div ng-show=\"companyFound\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"large-3 columns\">\n" +
    "      <h1>{{ company.name }}</h1>\n" +
    "      <div id=\"address\">{{ company.address }}</div>\n" +
    "      <div>{{ company.city }}, {{ company.stateAbbrv }} {{ company.zip }}</div>\n" +
    "      <br/>\n" +
    "      <div class=\"small button\" ng-show=\"company.phone\">Call Now: {{ company.phone | tel }}</div>\n" +
    "    </div>\n" +
    "    <div class=\"large-9 columns\">\n" +
    "      <br/><br/>\n" +
    "      <div class=\"panel\">\n" +
    "          <p>{{ company.shortDescription }}</p>\n" +
    "          <p>{{ company.longDescription }}</p>\n" +
    "          <p id=\"numEmployees\">{{ company.numEmployees }}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br/>\n" +
    "</div>\n"
  );

  $templateCache.put("angular/company2.html",
    "    <div ng-show=\"companyFound\" class=\"col-md-8 \" role=\"main\">\n" +
    "        <div>\n" +
    "            <address>\n" +
    "                <h1 class=\"text-primary\">{{ company.name }}</h1>\n" +
    "                <h4>\n" +
    "                    <span ng-show=\"company.address\" class=\"text-primary\">{{ company.address }}</span><br/>\n" +
    "                    <span ng-show=\"company.stateAbbrv\" class=\"text-primary\">{{ company.city }}, {{ company.stateAbbrv }} {{ company.zip }}</span><br/>\n" +
    "                    <span ng-show=\"company.phone\" class=\"text-primary\">Phone: {{ company.phone | tel }}</span>\n" +
    "                </h4>\n" +
    "            </address>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-7\">\n" +
    "                    <div>\n" +
    "                        <span class=\"h4 text-primary\"><strong>1 </strong></span><span class=\"text-primary\">Followers</span>\n" +
    "                        <a href=\"#\"><span>&bullet; Follow this business</span></a>\n" +
    "                        <br/>\n" +
    "                        <span class=\"h4 text-primary\"><strong>0 </strong></span><span class=\"text-primary\">Recommendations</span>\n" +
    "                        <a href=\"https://www.manta.com/member/join/?rld=http%3A%2F%2Fwww.manta.com%2Fc%2Fmmyq9sp%2Ffast-eddie%3Fdialog%3Dwrite-recommendation\">&bullet; Leave a recommendation</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <div class=\"btn-group\"><a href=\"#\" class=\"btn btn-info\">Own this Business?</a></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <h4 class=\"text-primary\">Top 5 Bail Bonding near {{ company.city }}, New Jersey</h4>\n" +
    "            <ol class=\"fs-small\">\n" +
    "                <li class=\"text-primary col-md-6\">\n" +
    "                    <a href=\"http://www.manta.com/c/mxggxby/east-coast-bail-bonds\" class=\"text-primary\">East Coast Bail Bonds</a>\n" +
    "                </li>\n" +
    "                <li class=\"text-primary col-md-6\">\n" +
    "                    <a href=\"http://www.manta.com/c/mt7r0b8/bellas-bail-bonds\" class=\"text-primary\">Bellas Bail Bonds</a>\n" +
    "                </li>\n" +
    "                <li class=\"text-primary col-md-6\">\n" +
    "                    <a href=\"http://www.manta.com/c/mxdsprl/first-out-bail-bond-agency\" class=\"text-primary\">First Out Bail Bond Agency</a>\n" +
    "                </li>\n" +
    "                <li class=\"text-primary col-md-6\">\n" +
    "                    <a href=\"http://www.manta.com/c/mr0c334/rapid-bail-bonds-llc\" class=\"text-primary\">Rapid Bail Bonds LLC</a>\n" +
    "                </li>\n" +
    "                <li class=\"text-primary col-md-6\">\n" +
    "                    <a href=\"http://www.manta.com/c/mmc3rqg/abc-bail-bonds\" class=\"text-primary\">Abc Bail Bonds</a>\n" +
    "                </li>\n" +
    "            </ol>\n" +
    "            <ul class=\"list-inline\">\n" +
    "\t\t    <li class=\"text-primary fs-small\"><strong><a href=\"http://www.manta.com/mb_55_AA185106_D2T/bail_bonding/mays_landing_nj\" class=\"text-primary\">» See All Bail Bonding</a></strong></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <h4 class=\"text-primary\">More Details for {{ company.name }}</h4>\n" +
    "            <p class=\"fs-small\">{{ company.name }} in {{ company.city }}, {{ company.stateAbbrv }} is a private company categorized under Bail Bonding. Our records show it was established in 2007 and incorporated in New Jersey.\n" +
    "                <a href=\"http://www.manta.com/member/join/?emid=mmyq9sp&amp;rld=http://www.manta.com/c/mmyq9sp/fast-eddie&amp;rl=only_mm\">Register for free</a>\n" +
    "                to see additional information such as annual revenue.</p>\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "                <li><h4 class=\"text-primary\">Products or Services</h4>\n" +
    "\t\t\t\t\t<span class=\"fs-small\">Companies like {{ company.name }} usually offer: Bail Bonds Person, Bonds Persons, Bondspersons.</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\t\n" +
    "        <div class=\"well well-sm\">\n" +
    "            <h4 class=\"text-primary\">Business Information</h4>\n" +
    "            <table class=\"table table-condensed\">\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">Location Type</th>\n" +
    "                        <td>Single Location</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">State of Incorporation</th>\n" +
    "                        <td>New Jersey</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">Annual Revenue Estimate</th>\n" +
    "                        <td><a href=\"http://www.manta.com/member/join/?emid=mmyq9sp&amp;rld=http://www.manta.com/c/mmyq9sp/fast-eddie&amp;rl=rev-\">Register for free to view</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">SIC Code</th>\n" +
    "                        <td><a href=\"http://www.manta.com/member/join/?emid=mmyq9sp&amp;rld=http://www.manta.com/c/mmyq9sp/fast-eddie&amp;rl=sic-\">Register for free to view</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">NAICS Code</th>\n" +
    "                        <td>524126, Direct Property &amp; Casualty Insurers</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">Employees</th>\n" +
    "                        <td>1 to 4<br>1 <a href=\"#\" onclick=\"return false;\">**</a></td>\n" +
    "                    </tr>\t\t\t<tr>\n" +
    "                        <th class=\"text-right\">Company contact</th>\n" +
    "                        <td>\n" +
    "                            <ul class=\"list-unstyled\">\n" +
    "                                <li>\n" +
    "                                    <div>\n" +
    "                                        <span><a href=\"http://www.manta.com/cs/mmyq9sp/fast-eddie?q=John%20Yellin%20Fast%20Eddie&amp;cx=000513454314247386359%3Aarvxicegnim&amp;cof=FORID%3A10\">John Yellin</a>, </span>\n" +
    "                                        <span>Principal</span>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <th class=\"text-right\">Business Categories</th>\n" +
    "                        <td>\n" +
    "                            <ul class=\"list-unstyled\">\n" +
    "                                <li><a href=\"http://www.manta.com/mb_55_AA185106_D2T/bail_bonding/mays_landing_nj\">Bail Bonding in {{ company.city }}, {{ company.stateAbbrv }}</a></li>\n" +
    "                                <li>Business Services</li>\n" +
    "                                <li>Direct Property &amp; Casualty Insurance Carriers</li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">What Companies Are Saying</div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul class=\"media-list\">\n" +
    "                    <li class=\"list-group-item\">\n" +
    "                        <div class=\"media\">\n" +
    "                            <a class=\"pull-left\" href=\"http://www.manta.com/c/mt7rwnb/buck-tails-outfitters\" target=\"_blank\"><img class=\"media-object\" src=\"http://services.manta-r1.com/api/claim-this-profile/image-mgr/view/20120705vBhyNVWhFy/50x50/img.jpg\"></a>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <a href=\"http://www.manta.com/c/mt7rwnb/buck-tails-outfitters\" target=\"_blank\">Buck Tails Outfitters</a>\n" +
    "                                <br><span class=\"fs-small\">{{ company.city }}, New Jersey</span>\n" +
    "                                <br>We service bows and crossbows! Cheapest prices around!\n" +
    "                                <div class=\"fs-small\">\n" +
    "                                    <a href=\"http://www.manta.com/ca/mt7rwnb/buck-tails-outfitters/m0mnc55\" title=\"View this post\"><small class=\"text-success\">2 days ago</small></a><br>\n" +
    "                                    <a href=\"http://www.manta.com/ca/mt7rwnb/buck-tails-outfitters/m0mnc55\" target=\"_blank\"><span class=\"glyphicon glyphicon-comment\"></span> Add a comment</a>\n" +
    "                                    &nbsp;\n" +
    "                                    <a href=\"#\"><span class=\"glyphicon glyphicon-star\"></span> Follow company</a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"list-group-item\">\n" +
    "                        <div class=\"media\">\n" +
    "                            <a class=\"pull-left\" href=\"http://www.manta.com/c/mx4wck5/rv-rescue\" target=\"_blank\"><img src=\"http://services.manta-r1.com/api/claim-this-profile/image-mgr/view/20130614sV28Icx7kr/50x50/img.jpg\"></a>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <a href=\"http://www.manta.com/c/mx4wck5/rv-rescue\" target=\"_blank\">RV RESCUE</a>\n" +
    "                                <br><span class=\"fs-small\">{{ company.city }}, New Jersey</span>\n" +
    "                                <br>Our service truck!\n" +
    "                                <div class=\"well well-sm\">\n" +
    "                                    <div class=\"text-center\">\n" +
    "                                        <a href=\"javascript:void(0)\" title=\"RV RESCUE\">\n" +
    "                                            <img src=\"http://i3.manta-r1.com/image/b1ddcad8-e3b7-449d-890f-cb7d456f2fb3/265x265\">\n" +
    "                                        </a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"fs-small\">\n" +
    "                                    <a href=\"http://www.manta.com/ca/mx4wck5/rv-rescue/mnpck8m\" title=\"View this post\" class=\"\"><small class=\"text-success\">2 months ago</small></a><br>\n" +
    "                                    <a href=\"http://www.manta.com/ca/mx4wck5/rv-rescue/mnpck8m\" target=\"_blank\" class=\"\"><span class=\"glyphicon glyphicon-comment\"></span> Add a comment</a>\n" +
    "                                    &nbsp;\n" +
    "                                    <a href=\"#\"><span class=\"glyphicon glyphicon-star\"></span> Follow company</span></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"list-group-item\">\n" +
    "                        <div class=\"media\">\n" +
    "                            <a class=\"pull-left\" href=\"http://www.manta.com/c/mt7rwnb/buck-tails-outfitters\" target=\"_blank\"><img class=\"media-object\" src=\"http://services.manta-r1.com/api/claim-this-profile/image-mgr/view/20120705vBhyNVWhFy/50x50/img.jpg\"></a>\n" +
    "                            <div class=\"media-body\">\n" +
    "                                <a href=\"http://www.manta.com/c/mt7rwnb/buck-tails-outfitters\" target=\"_blank\">Buck Tails Outfitters</a>\n" +
    "                                <br><span class=\"fs-small\">{{ company.city }}, New Jersey</span>\n" +
    "                                <br>We service bows and crossbows! Cheapest prices around!\n" +
    "                                <div class=\"fs-small\">\n" +
    "                                    <a href=\"http://www.manta.com/ca/mt7rwnb/buck-tails-outfitters/m0mnc55\" title=\"View this post\"><small class=\"text-success\">2 days ago</small></a><br>\n" +
    "                                    <a href=\"http://www.manta.com/ca/mt7rwnb/buck-tails-outfitters/m0mnc55\" target=\"_blank\"><span class=\"glyphicon glyphicon-comment\"></span> Add a comment</a>\n" +
    "                                    &nbsp;\n" +
    "                                    <a href=\"#\"><span class=\"glyphicon glyphicon-star\"></span> Follow company</a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"panel-map\">\n" +
    "            <a href=\"{{ company.mantaUrl.map }}\">\n" +
    "                <img ng-src=\"http://maps.googleapis.com/maps/api/staticmap?center={{ company.address }}%2C{{ company.city }}%2C{{ company.stateAbbrv }}&amp;zoom=17&amp;size=317x200&amp;maptype=roadmap&amp;markers=color:yellow%7C{{ company.address }}%2C{{ company.city }}%2C{{ company.stateAbbrv  }}&amp;sensor=false\" border=\"0\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "            <div class=\"panel panel-default\">\n" +
    "              <div class=\"panel-heading\">Recommendations</div>\n" +
    "              <div class=\"panel-body\">\n" +
    "                <div class=\"media\">\n" +
    "                   <div class=\"pull-left\"><span class=\"media-object text-info glyphicon glyphicon-check\"></span></div>\n" +
    "                   <div class=\"media-body\">\n" +
    "                      <a href=\"https://www.manta.com/member/join/?rld={{ company.mantaUrl.profile }}%3Fdialog%3Dwrite-recommendation\">\n" +
    "                       <span>Have a good experience?<br>Add Your Recommendation</span>\n" +
    "                      </a>\n" +
    "                   </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"panel panel-default\">\n" +
    "               <div class=\"panel-heading\">Similar Businesses in Nearby Cities</div>\n" +
    "               <div class=\"panel-body\">\n" +
    "                  <ul class=\"list-unstyled\">\n" +
    "                    <li>\n" +
    "                        <p><a href=\"http://www.manta.com/mb_55_AA185106_CXQ/bail_bonding/egg_harbor_city_nj\">Egg Harbor City, {{ company.stateAbbrv }}<br>\n" +
    "                            <span class=\"text-muted\">Bail Bonding</span></a> <span class=\"text-warning\"><strong>(1)</strong></span>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <p><a href=\"http://www.manta.com/mb_55_AA185106_CXR/bail_bonding/egg_harbor_township_nj\">Egg Harbor Township, {{ company.stateAbbrv }}<br>\n" +
    "                            <span class=\"text-muted\">Bail Bonding</span></a> <span class=\"text-warning\"><strong>(1)</strong></span>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <p><a href=\"http://www.manta.com/mb_55_AA185106_D64/bail_bonding/pleasantville_nj\">Pleasantville, {{ company.stateAbbrv }}<br>\n" +
    "                            <span class=\"text-muted\">Bail Bonding</span></a> <span class=\"text-warning\"><strong>(1)</strong></span>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <p><a href=\"http://www.manta.com/mb_55_AA185106_D9U/bail_bonding/vineland_nj\">Vineland, {{ company.stateAbbrv }}<br>\n" +
    "                            <span class=\"text-muted\">Bail Bonding</span></a> <span class=\"text-warning\"><strong>(1)</strong></span>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <p><a href=\"http://www.manta.com/mb_55_AA185106_CU8/bail_bonding/atlantic_city_nj\">Atlantic City, {{ company.stateAbbrv }}<br>\n" +
    "                            <span class=\"text-muted\">Bail Bonding</span></a> <span class=\"text-warning\"><strong>(1)</strong></span>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "               </div>\n" +
    "            </div>\n" +
    "            <div class=\"panel panel-default\">\n" +
    "               <div class=\"panel-heading\">In Related Categories</div>\n" +
    "               <div class=\"panel-body\">\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li>\n" +
    "                            <p><a href=\"http://www.manta.com/mb_55_AA1857PR_D2T/unclassified/mays_landing_nj\">Unclassified<br>\n" +
    "                                <span class=\"text-muted\">in {{ company.city }}, {{ company.stateAbbrv }}</span></a>\n" +
    "                                <span class=\"text-warning\"><strong>(118)</strong></span></p>\n" +
    "                        </li>\t\t\t\t\t\t<li>\n" +
    "                            <p><a href=\"http://www.manta.com/mb_55_AA185000_D2T/business_services_nec/mays_landing_nj\">Business Services (Unclassified)<br>\n" +
    "                                <span class=\"text-muted\">in {{ company.city }}, {{ company.stateAbbrv }}</span></a>\n" +
    "                                <span class=\"text-warning\"><strong>(54)</strong></span></p>\n" +
    "                        </li>\t\t\t\t\t\t<li>\n" +
    "                            <p><a href=\"http://www.manta.com/mb_55_AA1851E0_D2T/design_services/mays_landing_nj\">Design Services<br>\n" +
    "                                <span class=\"text-muted\">in {{ company.city }}, {{ company.stateAbbrv }}</span></a>\n" +
    "                                <span class=\"text-warning\"><strong>(13)</strong></span></p>\n" +
    "                        </li>\t\t\t\t\t\t<li>\n" +
    "                            <p><a href=\"http://www.manta.com/mb_55_AA1850GO_D2T/interior_design_services/mays_landing_nj\">Interior Decorators Design and Consultants<br>\n" +
    "                                <span class=\"text-muted\">in {{ company.city }}, {{ company.stateAbbrv }}</span></a>\n" +
    "                                <span class=\"text-warning\"><strong>(6)</strong></span></p>\n" +
    "                        </li>\t\t\t\t\t\t<li>\n" +
    "                            <p><a href=\"http://www.manta.com/mb_55_AA18502S_D2T/personal_service_agents_brokers_and_bureaus/mays_landing_nj\">Merchandise Brokers<br>\n" +
    "                                <span class=\"text-muted\">in {{ company.city }}, {{ company.stateAbbrv }}</span></a>\n" +
    "                                <span class=\"text-warning\"><strong>(6)</strong></span></p>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "               </div>\n" +
    "            </div>\n" +
    "\n" +
    "    </div>\n"
  );

  $templateCache.put("angular/home.html",
    "<div id=\"home\" class=\"row\">\n" +
    "  <div class=\"large-6 large-offset-3\">\n" +
    "    <h2>Welcome to the {{ title }} page!</h2>\n" +
    "\n" +
    "    <div class=\"alert-box\">{{ message }}</div>\n" +
    "\n" +
    "    <a href=\"/companies/asdf\">Go to company page</a>\n" +
    "    \n" +
    "    <ul class=\"small-block-grid-2\">\n" +
    "      <li>\n" +
    "        <img class=\"th\" src=\"img/demo1.jpg\" shows-message-when-hovered message=\"Im the first house.\">\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <img class=\"th\" src=\"img/demo2.jpg\" shows-message-when-hovered message=\"Im the second house.\">\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"large-12 columns\">\n" +
    "        <button ng-click=\"logout()\" class=\"button large expand radius\">Log Out</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("angular/login.html",
    "<div id=\"login\" class=\"row\">\n" +
    "  <div class=\"large-6 large-offset-3\">\n" +
    "    <form ng-submit=\"login()\">\n" +
    "      <fieldset class=\"radius\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"large-6 columns\">\n" +
    "            <input type=\"text\" name=\"username\" placeholder=\"username\" ng-model=\"credentials.username\" required/>\n" +
    "          </div>\n" +
    "            <div class=\"large-6 columns\">\n" +
    "              <input type=\"password\" name=\"password\" placeholder=\"password\" ng-model=\"credentials.password\" required/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"large-12 columns\">\n" +
    "            <button id=\"log-in\" type=\"submit\" class=\"button large expand radius\">Log In</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </fieldset>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("angular/member_profile.html",
    "<div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <h1>{{member.firstName}} {{member.lastName}}</h1>\n" +
    "        <h2>{{member.title}}</h2>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <button ng-click=\"edit()\">edit</button>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <img class=\"avatar\" src=\"{{member.avatarUrl}}\">\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("angular/member_profile_edit.html",
    "<div>\n" +
    "    <form name=\"editMemberForm\" class=\"form\" novalidate>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 form-group\">\n" +
    "                <label>First Name:</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"firstName\" ng-model=\"member.firstName\" required>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\" ng-show=\"editMemberForm.firstName.$dirty && editMemberForm.firstName.$invalid\">\n" +
    "              <span class=\"glyphicon glyphicon-hand-left\"></span>&nbsp;<span ng-show=\"editMemberForm.firstName.$error.required\">First Name is required.</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 form-group\">\n" +
    "                <label>Last Name:</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"lastName\" ng-model=\"member.lastName\" required />\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\" ng-show=\"editMemberForm.lastName.$dirty && editMemberForm.lastName.$invalid\">\n" +
    "              <span class=\"glyphicon glyphicon-hand-left\"></span>&nbsp;<span ng-show=\"editMemberForm.lastName.$error.required\">Last Name is required.</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 form-group\">\n" +
    "                <label>Title:</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"title\" ng-model=\"member.title\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 form-group\">\n" +
    "                <label>Email:</label>\n" +
    "                <input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"member.email\" required />\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\" ng-show=\"editMemberForm.email.$dirty && editMemberForm.email.$invalid\">\n" +
    "              <span class=\"glyphicon glyphicon-hand-left\"></span>&nbsp;\n" +
    "              <span ng-show=\"editMemberForm.email.$error.required\">Email is required.</span>\n" +
    "              <span ng-show=\"editMemberForm.email.$error.email\">The email you entered is not valid.</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 form-group\">\n" +
    "                <label>Avatar URL:</label>\n" +
    "                <input type=\"url\" class=\"form-control\" name=\"avatarUrl\" ng-model=\"member.avatarUrl\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\" ng-show=\"editMemberForm.avatarUrl\">\n" +
    "                <img height=\"72\" class=\"avatar\" src=\"{{member.avatarUrl}}\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"editMemberForm.$invalid\">save</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );

  $templateCache.put("angular/test.html",
    "<div>\n" +
    "hello there, I am a test\n" +
    "</div>"
  );

}]);
