import React, { useState, useEffect } from "react";
import jsonata from "jsonata";
import { JsonViewer } from "@textea/json-viewer";

const ticket = {
  ticket: {
    url: "https://d3v-proshore.zendesk.com/api/v2/tickets/1841.json",
    id: 1841,
    external_id: null,
    via: {
      channel: "api",
      source: {
        from: {
          home: "Home",
        },
        to: {},
        rel: null,
      },
    },
    created_at: "2021-01-05T10:21:22Z",
    updated_at: "2022-02-11T14:01:23Z",
    type: "question",
    subject: "Final Test",
    raw_subject: "Final Test",
    description: "Final Test",
    priority: "normal",
    status: "open",
    recipient: null,
    requester_id: 403242090572,
    submitter_id: 403242090572,
    assignee_id: 384105129592,
    organization_id: null,
    group_id: 360005448392,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [
      "1",
      "3",
      "_return_defect_deflates_without_visible_damage",
      "loetje_almere",
    ],
    custom_fields: [
      {
        id: 360046687232,
        value: null,
      },
      {
        id: 360042207491,
        value: null,
      },
      {
        id: 360041983492,
        value: null,
      },
      {
        id: 360041402891,
        value: null,
      },
      {
        id: 9094011892749,
        value: null,
      },
      {
        id: 10348918683149,
        value: null,
      },
      {
        id: 9294046905613,
        value: null,
      },
      {
        id: 11658831027213,
        value: null,
      },
      {
        id: 8954994319629,
        value: null,
      },
      {
        id: 8955085617933,
        value: null,
      },
      {
        id: 9462112032525,
        value: null,
      },
      {
        id: 9094664793357,
        value: null,
      },
      {
        id: 10500688232205,
        value: null,
      },
      {
        id: 8954837057549,
        value: null,
      },
      {
        id: 8955004633869,
        value: null,
      },
      {
        id: 360041469971,
        value: null,
      },
      {
        id: 360027772692,
        value: null,
      },
      {
        id: 360014027031,
        value: "9561796",
      },
      {
        id: 360022428951,
        value: null,
      },
      {
        id: 360041469991,
        value: null,
      },
      {
        id: 360042097452,
        value: null,
      },
      {
        id: 360041503792,
        value: null,
      },
      {
        id: 360044214071,
        value: null,
      },
      {
        id: 360027829051,
        value: null,
      },
      {
        id: 360041470011,
        value: null,
      },
      {
        id: 360039184711,
        value: false,
      },
      {
        id: 360045369672,
        value: null,
      },
      {
        id: 360031360332,
        value: null,
      },
      {
        id: 360041470031,
        value: null,
      },
      {
        id: 360041332312,
        value: null,
      },
      {
        id: 360041288291,
        value: "New Frontier",
      },
      {
        id: 360041470051,
        value: null,
      },
      {
        id: 360041332332,
        value: null,
      },
      {
        id: 360027058031,
        value: null,
      },
      {
        id: 360041691251,
        value: false,
      },
      {
        id: 360027772532,
        value: null,
      },
      {
        id: 360041288311,
        value: null,
      },
      {
        id: 360041288331,
        value: null,
      },
      {
        id: 11609584511117,
        value: null,
      },
      {
        id: 9768317110669,
        value: null,
      },
      {
        id: 8955041964173,
        value: null,
      },
      {
        id: 9123599314061,
        value: null,
      },
      {
        id: 8954931021965,
        value: null,
      },
      {
        id: 9549558507405,
        value: null,
      },
      {
        id: 8955088857997,
        value: null,
      },
      {
        id: 7251846166157,
        value: null,
      },
      {
        id: 9266727615629,
        value: null,
      },
      {
        id: 360041332372,
        value: null,
      },
      {
        id: 360042017692,
        value: null,
      },
      {
        id: 360046727591,
        value: null,
      },
      {
        id: 360042710451,
        value: null,
      },
      {
        id: 360039331512,
        value: false,
      },
      {
        id: 360027056831,
        value: null,
      },
      {
        id: 360027924172,
        value: "_return_defect_deflates_without_visible_damage",
      },
      {
        id: 360042051031,
        value: null,
      },
      {
        id: 360039294171,
        value: false,
      },
      {
        id: 360014162151,
        value: "loetje_almere",
      },
      {
        id: 360039526892,
        value: false,
      },
      {
        id: 360046687212,
        value: null,
      },
      {
        id: 360038896111,
        value: false,
      },
      {
        id: 360041473272,
        value: null,
      },
    ],
    satisfaction_rating: {
      score: "unoffered",
    },
    sharing_agreement_ids: [],
    custom_status_id: 5934231,
    fields: [
      {
        id: 360046687232,
        value: null,
      },
      {
        id: 360042207491,
        value: null,
      },
      {
        id: 360041983492,
        value: null,
      },
      {
        id: 360041402891,
        value: null,
      },
      {
        id: 9094011892749,
        value: null,
      },
      {
        id: 10348918683149,
        value: null,
      },
      {
        id: 9294046905613,
        value: null,
      },
      {
        id: 11658831027213,
        value: null,
      },
      {
        id: 8954994319629,
        value: null,
      },
      {
        id: 8955085617933,
        value: null,
      },
      {
        id: 9462112032525,
        value: null,
      },
      {
        id: 9094664793357,
        value: null,
      },
      {
        id: 10500688232205,
        value: null,
      },
      {
        id: 8954837057549,
        value: null,
      },
      {
        id: 8955004633869,
        value: null,
      },
      {
        id: 360041469971,
        value: null,
      },
      {
        id: 360027772692,
        value: null,
      },
      {
        id: 360014027031,
        value: "9561796",
      },
      {
        id: 360022428951,
        value: null,
      },
      {
        id: 360041469991,
        value: null,
      },
      {
        id: 360042097452,
        value: null,
      },
      {
        id: 360041503792,
        value: null,
      },
      {
        id: 360044214071,
        value: null,
      },
      {
        id: 360027829051,
        value: null,
      },
      {
        id: 360041470011,
        value: null,
      },
      {
        id: 360039184711,
        value: false,
      },
      {
        id: 360045369672,
        value: null,
      },
      {
        id: 360031360332,
        value: null,
      },
      {
        id: 360041470031,
        value: null,
      },
      {
        id: 360041332312,
        value: null,
      },
      {
        id: 360041288291,
        value: "New Frontier",
      },
      {
        id: 360041470051,
        value: null,
      },
      {
        id: 360041332332,
        value: null,
      },
      {
        id: 360027058031,
        value: null,
      },
      {
        id: 360041691251,
        value: false,
      },
      {
        id: 360027772532,
        value: null,
      },
      {
        id: 360041288311,
        value: null,
      },
      {
        id: 360041288331,
        value: null,
      },
      {
        id: 11609584511117,
        value: null,
      },
      {
        id: 9768317110669,
        value: null,
      },
      {
        id: 8955041964173,
        value: null,
      },
      {
        id: 9123599314061,
        value: null,
      },
      {
        id: 8954931021965,
        value: null,
      },
      {
        id: 9549558507405,
        value: null,
      },
      {
        id: 8955088857997,
        value: null,
      },
      {
        id: 7251846166157,
        value: null,
      },
      {
        id: 9266727615629,
        value: null,
      },
      {
        id: 360041332372,
        value: null,
      },
      {
        id: 360042017692,
        value: null,
      },
      {
        id: 360046727591,
        value: null,
      },
      {
        id: 360042710451,
        value: null,
      },
      {
        id: 360039331512,
        value: false,
      },
      {
        id: 360027056831,
        value: null,
      },
      {
        id: 360027924172,
        value: "_return_defect_deflates_without_visible_damage",
      },
      {
        id: 360042051031,
        value: null,
      },
      {
        id: 360039294171,
        value: false,
      },
      {
        id: 360014162151,
        value: "loetje_almere",
      },
      {
        id: 360039526892,
        value: false,
      },
      {
        id: 360046687212,
        value: null,
      },
      {
        id: 360038896111,
        value: false,
      },
      {
        id: 360041473272,
        value: null,
      },
    ],
    followup_ids: [],
    ticket_form_id: 114093972331,
    brand_id: 360002738991,
    allow_channelback: false,
    allow_attachments: true,
  },
  users: [
    {
      id: 384105129592,
      url: "https://d3v-proshore.zendesk.com/api/v2/users/384105129592.json",
      name: "Sakar Khatiwada",
      email: "s.khatiwada@pluscloud.nl",
      created_at: "2019-07-02T07:09:23Z",
      updated_at: "2023-01-11T09:09:57Z",
      time_zone: "Athens",
      iana_time_zone: "Europe/Athens",
      phone: "402",
      shared_phone_number: false,
      photo: {
        url: "https://d3v-proshore.zendesk.com/api/v2/attachments/361259851131.json",
        id: 361259851131,
        file_name: "DSC08778.jpg",
        content_url:
          "https://d3v-proshore.zendesk.com/system/photos/361259851131/DSC08778.jpg",
        mapped_content_url:
          "https://d3v-proshore.zendesk.com/system/photos/361259851131/DSC08778.jpg",
        content_type: "image/jpeg",
        size: 11496,
        width: 80,
        height: 120,
        inline: false,
        deleted: false,
        thumbnails: [
          {
            url: "https://d3v-proshore.zendesk.com/api/v2/attachments/361259851151.json",
            id: 361259851151,
            file_name: "DSC08778_thumb.jpg",
            content_url:
              "https://d3v-proshore.zendesk.com/system/photos/361259851131/DSC08778_thumb.jpg",
            mapped_content_url:
              "https://d3v-proshore.zendesk.com/system/photos/361259851131/DSC08778_thumb.jpg",
            content_type: "image/jpeg",
            size: 1745,
            width: 21,
            height: 32,
            inline: false,
            deleted: false,
          },
        ],
      },
      locale_id: 1,
      locale: "en-US",
      organization_id: 360117379171,
      role: "admin",
      verified: true,
      external_id: null,
      tags: [],
      alias: "",
      active: true,
      shared: false,
      shared_agent: false,
      last_login_at: "2023-01-11T08:02:00Z",
      two_factor_auth_enabled: null,
      signature: "",
      details: "",
      notes: "",
      role_type: 4,
      custom_role_id: 360017763211,
      moderator: true,
      ticket_restriction: null,
      only_private_comments: false,
      restricted_agent: false,
      suspended: false,
      default_group_id: 114094853911,
      report_csv: false,
      user_fields: {
        requeste_collabarators_: null,
      },
    },
    {
      id: 403242090572,
      url: "https://d3v-proshore.zendesk.com/api/v2/users/403242090572.json",
      name: "james",
      email: "subedijames2017@gmail.com",
      created_at: "2020-09-10T07:55:44Z",
      updated_at: "2021-07-15T04:17:24Z",
      time_zone: "Athens",
      iana_time_zone: "Europe/Athens",
      phone: null,
      shared_phone_number: null,
      photo: null,
      locale_id: 1,
      locale: "en-US",
      organization_id: null,
      role: "agent",
      verified: true,
      external_id: null,
      tags: [],
      alias: "",
      active: true,
      shared: false,
      shared_agent: false,
      last_login_at: "2021-07-15T04:11:16Z",
      two_factor_auth_enabled: null,
      signature: null,
      details: "",
      notes: "",
      role_type: 3,
      custom_role_id: 360009192391,
      moderator: false,
      ticket_restriction: "groups",
      only_private_comments: false,
      restricted_agent: true,
      suspended: false,
      default_group_id: 114094853911,
      report_csv: false,
      user_fields: {
        requeste_collabarators_: null,
      },
    },
  ],
  groups: [
    {
      url: "https://d3v-proshore.zendesk.com/api/v2/groups/360005448392.json",
      id: 360005448392,
      is_public: true,
      name: "Test",
      description: "",
      default: false,
      deleted: false,
      created_at: "2019-07-23T08:06:24Z",
      updated_at: "2019-07-23T08:06:24Z",
    },
  ],
  organizations: [],
  brands: [
    {
      url: "https://d3v-proshore.zendesk.com/api/v2/brands/360002738991.json",
      id: 360002738991,
      name: "Proshore 2",
      brand_url: "https://d3v-proshore-2.zendesk.com",
      subdomain: "d3v-proshore-2",
      host_mapping: null,
      has_help_center: true,
      help_center_state: "enabled",
      active: true,
      default: false,
      is_deleted: false,
      logo: null,
      ticket_form_ids: [
        114093972331, 360000625732, 360000662631, 360001282951, 1900000493567,
        4425576381837, 8955536655885, 9178997259021, 9555739061901,
      ],
      signature_template: "{{agent.signature}}",
      created_at: "2019-08-08T12:35:04Z",
      updated_at: "2019-08-08T12:35:04Z",
    },
  ],
};

const App = () => {
  const [result, setResult] = useState(null);

  const getData = async (event) => {
    const query = event.filter((x) => isNaN(x)).join(".");
    console.log(query);
    const expression = jsonata(query);
    const data = await expression.evaluate(ticket);
    console.log(data);
    setResult(data);
  };
  return (
    <>
      <div>
        <div style={{ width: "50%" }}>
          <JsonViewer value={ticket} onCopy={getData} onSelect={getData} />
        </div>
        <div style={{ width: "50%", float: "left" }}>
          {result && typeof result === "object" ? (
            Object.keys(result).map((key) => {
              if (typeof result[key] !== "object") {
                return <h1 key={key}>{result[key]}</h1>;
              }
            })
          ) : (
            <h1>{result}</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
