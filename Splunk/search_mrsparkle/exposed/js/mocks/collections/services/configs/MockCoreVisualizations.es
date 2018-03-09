/* eslint-disable max-len */
import VisualizationsCollection from 'collections/services/configs/Visualizations';
import VisualizationRegistry from 'helpers/VisualizationRegistry';
import AppsLocalCollection from 'collections/services/AppLocals';

export const getCoreVisualizationsSplunkdResponse = () => JSON.parse(`{
  "links": {
    "_reload": "/servicesNS/admin/search/data/ui/visualizations/_reload",
    "_acl": "/servicesNS/admin/search/data/ui/visualizations/_acl"
  },
  "origin": "https://localhost:8089/servicesNS/admin/search/data/ui/visualizations",
  "updated": "2017-04-05T15:20:32-07:00",
  "generator": {
    "build": "450a25f3014ee29009de3a075808398c8d26c298",
    "version": "20170331"
  },
  "entry": [
    {
      "name": "area",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/area",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/area",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/area",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/area/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "area",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-area",
        "core.order": "2",
        "core.preview_image": "area.png",
        "core.recommend_for": "timechart",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Track changes in aggregated values over time.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Area Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| timechart count [by comparison_category]",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "bar",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/bar",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/bar",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/bar",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/bar/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "bar",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-bar",
        "core.order": "4",
        "core.preview_image": "bar.png",
        "core.recommend_for": "top, rare",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Compare values or fields.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Bar Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count by comparison_category",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "bubble",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/bubble",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/bubble",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/bubble",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/bubble/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "bubble",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-bubble",
        "core.order": "7",
        "core.preview_image": "bubble.png",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Show relationships between discrete values in three dimensions.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Bubble Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats x_value_aggregation y_value_aggregation size_aggregation by name_category [comparison_category]",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "choropleth",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/choropleth",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/choropleth",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/choropleth",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/choropleth/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.height_attribute": "display.visualizations.mapHeight",
        "core.icon": "choropleth-map",
        "core.mapping_type": "choropleth",
        "core.order": "13",
        "core.preview_image": "choropleth.png",
        "core.recommend_for": "geom",
        "core.type": "visualizations",
        "core.viz_type": "mapping",
        "data_sources.primary.params.count": "$CHOROPLETH_SHAPE_LIMIT:10000$",
        "data_sources.primary.mapping_filter": "true",
        "data_sources.primary.mapping_filter.center": "$display.visualizations.mapping.map.center:(0,0)$",
        "data_sources.primary.mapping_filter.zoom": "$display.visualizations.mapping.map.zoom:2$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.search": "geomfilter min_y=$south$ min_x=$west$ max_y=$north$ max_x=$east$",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "400",
        "default_width": "300",
        "description": "Show how values vary over a geographic region.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Choropleth Map",
        "max_height": "10000",
        "min_height": "200",
        "min_width": "100",
        "search_fragment": "| stats count by featureId | geom geo_countries featureIdField=featureId",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "column",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/column",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/column",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/column",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/column/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "column",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-column",
        "core.order": "3",
        "core.preview_image": "column.png",
        "core.recommend_for": "timechart, top, rare",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Compare values or fields.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Column Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count by comparison_category",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "events",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/events",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/events",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/events",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/events/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.icon": "list",
        "core.order": "15",
        "core.preview_image": "events.png",
        "core.type": "events",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "List events from search results.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Events",
        "max_height": "1000",
        "min_height": "0",
        "min_width": "100",
        "search_fragment": "",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "False",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "fillerGauge",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/fillerGauge",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/fillerGauge",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/fillerGauge",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/fillerGauge/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "fillerGauge",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "gauge-filler",
        "core.order": "10",
        "core.preview_image": "fillerGauge.png",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Show a single value and its current range.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Filler Gauge",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count",
        "supports_drilldown": "False",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "line",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/line",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/line",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/line",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/line/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "line",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-line",
        "core.order": "1",
        "core.preview_image": "line.png",
        "core.recommend_for": "timechart, predict",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Track values and trends over time.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Line Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| timechart count [by comparison_category]",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "mapping",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/mapping",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/mapping",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/mapping",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/mapping/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.height_attribute": "display.visualizations.mapHeight",
        "core.icon": "location",
        "core.mapping_type": "marker",
        "core.order": "12",
        "core.preview_image": "mapping.png",
        "core.recommend_for": "geostats",
        "core.type": "visualizations",
        "core.viz_type": "mapping",
        "data_sources.primary.params.count": "$display.visualizations.mapping.data.maxClusters:100$",
        "data_sources.primary.mapping_filter": "true",
        "data_sources.primary.mapping_filter.center": "$display.visualizations.mapping.map.center:(0,0)$",
        "data_sources.primary.mapping_filter.zoom": "$display.visualizations.mapping.map.zoom:2$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.search": "geofilter south=$south$ west=$west$ north=$north$ east=$east$ maxclusters=$display.visualizations.mapping.data.maxClusters:100$",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "400",
        "default_width": "600",
        "description": "Show aggregated values in a geographic region.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Cluster Map",
        "max_height": "10000",
        "min_height": "200",
        "min_width": "100",
        "search_fragment": "| geostats count [by category] latfield=lat longfield=lon",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "False",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "markerGauge",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/markerGauge",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/markerGauge",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/markerGauge",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/markerGauge/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "markerGauge",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "gauge-marker",
        "core.order": "11",
        "core.preview_image": "markerGauge.png",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Show a single value in relation to customized ranges.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Marker Gauge",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count",
        "supports_drilldown": "False",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "pie",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/pie",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/pie",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/pie",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/pie/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "pie",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-pie",
        "core.order": "5",
        "core.preview_image": "pie.png",
        "core.recommend_for": "top, rare",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Compare categories in a dataset.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Pie Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count by comparison_category",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "radialGauge",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/radialGauge",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/radialGauge",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/radialGauge",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/radialGauge/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "radialGauge",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "gauge-radial",
        "core.order": "9",
        "core.preview_image": "radialGauge.png",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Show a single value in relation to customized ranges.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Radial Gauge",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats count",
        "supports_drilldown": "False",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "scatter",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/scatter",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/scatter",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/scatter",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/scatter/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.charting_type": "scatter",
        "core.height_attribute": "display.visualizations.chartHeight",
        "core.icon": "chart-scatter",
        "core.order": "6",
        "core.preview_image": "scatter.png",
        "core.type": "visualizations",
        "core.viz_type": "charting",
        "data_sources.primary.params.count": "$display.visualizations.charting.data.count:JSCHART_RESULTS_LIMIT:10000$",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "300",
        "default_width": "300",
        "description": "Show relationships between discrete values in two dimensions.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Scatter Chart",
        "max_height": "10000",
        "min_height": "100",
        "min_width": "100",
        "search_fragment": "| stats x_value_aggregation y_value_aggregation by name_category [comparison_category]",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400"
      }
    },
    {
      "name": "singlevalue",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/singlevalue",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/singlevalue",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/singlevalue",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/singlevalue/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.height_attribute": "display.visualizations.singlevalueHeight",
        "core.icon": "single-value",
        "core.order": "8",
        "core.preview_image": "singlevalue.png",
        "core.recommend_for": "timechart",
        "core.type": "visualizations",
        "core.viz_type": "singlevalue",
        "data_sources.primary.params.count": "1000",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_cols",
        "data_sources.primary.params.show_metadata": "true",
        "default_height": "115",
        "default_width": "300",
        "description": "Track a metric with context and trends.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Single Value",
        "max_height": "10000",
        "min_height": "50",
        "min_width": "100",
        "search_fragment": "| timechart count",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "True",
        "trellis_default_height": "400",
        "trellis_min_widths": "70, 130, 230",
        "trellis_per_row": "10, 6, 4"
      }
    },
    {
      "name": "statistics",
      "id": "https://localhost:8089/servicesNS/nobody/system/data/ui/visualizations/statistics",
      "updated": "1969-12-31T16:00:00-08:00",
      "links": {
        "alternate": "/servicesNS/nobody/system/data/ui/visualizations/statistics",
        "list": "/servicesNS/nobody/system/data/ui/visualizations/statistics",
        "_reload": "/servicesNS/nobody/system/data/ui/visualizations/statistics/_reload"
      },
      "author": "nobody",
      "acl": {
        "app": "system",
        "can_change_perms": true,
        "can_list": true,
        "can_share_app": true,
        "can_share_global": true,
        "can_share_user": false,
        "can_write": true,
        "modifiable": true,
        "owner": "nobody",
        "perms": {
          "read": [
            "*"
          ],
          "write": [
            "admin"
          ]
        },
        "removable": false,
        "sharing": "system"
      },
      "content": {
        "allow_user_selection": true,
        "core.icon": "table",
        "core.order": "14",
        "core.preview_image": "statistics.png",
        "core.recommend_for": "timechart, top, rare, predict",
        "core.type": "statistics",
        "data_sources.primary.params.count": "20",
        "data_sources.primary.params.offset": "0",
        "data_sources.primary.params.output_mode": "json_rows",
        "data_sources.primary.params.show_metadata": "true",
        "data_sources.primary.params.sort_direction": "$display.statistics.sortDirection:$",
        "data_sources.primary.params.sort_key": "$display.statistics.sortColumn:$",
        "default_height": "300",
        "default_width": "300",
        "description": "Show results organized in rows and columns.",
        "disabled": false,
        "eai:acl": null,
        "eai:appName": "search",
        "eai:userName": "admin",
        "label": "Statistics Table",
        "max_height": "1000",
        "min_height": "0",
        "min_width": "100",
        "search_fragment": "",
        "supports_drilldown": "True",
        "supports_export": "True",
        "supports_trellis": "False",
        "trellis_default_height": "400"
      }
    }
  ],
  "paging": {
    "total": 15,
    "perPage": 30,
    "offset": 0
  },
  "messages": []
}
`);

export function getMockCoreVisualizationsCollection() {
    const collection = new VisualizationsCollection();
    collection.setFromSplunkD(getCoreVisualizationsSplunkdResponse());
    return collection;
}

export function loadMockCoreVisualizations({ loadFormatterHtml = false } = {}) {
    return VisualizationRegistry.registerVisualizationsCollection({
        collection: {
            visualizations: getMockCoreVisualizationsCollection(),
            appsLocal: new AppsLocalCollection(),
        },
        loadFormatterHtml,
    });
}

export function reset() {
    VisualizationRegistry.reset();
}
