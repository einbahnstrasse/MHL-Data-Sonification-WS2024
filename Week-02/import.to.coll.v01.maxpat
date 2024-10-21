{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 2,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 464.0, 182.0, 547.0, 397.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 88.99999725818634, 22.000000655651093, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-18",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 162.333331525325775, 320.666676223278046, 66.666665732860565, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-17",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 88.99999725818634, 320.666676223278046, 69.333333909511566, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "float" ],
					"patching_rect" : [ 88.99999725818634, 286.333333551883698, 92.333334267139435, 22.0 ],
					"text" : "unpack f f"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 259.000007271766663, 172.666671812534332, 32.0, 22.0 ],
					"text" : "prev"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 303.500003337860107, 286.333333551883698, 67.0, 22.0 ],
					"text" : "print index:"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 194.666672468185425, 172.666671812534332, 31.0, 22.0 ],
					"text" : "next"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 245.333332121372223, 124.666664659976959, 173.0, 20.0 ],
					"text" : "<= request data at index (year)"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 194.666672468185425, 123.666664659976959, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 211.666667580604553, 286.333333551883698, 62.0, 22.0 ],
					"text" : "print data:"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 245.333332121372223, 88.333330273628235, 243.0, 20.0 ],
					"text" : "<index>, data data data ... data ; <new line>"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 88.99999725818634, 129.333331942558289, 49.0, 22.0 ],
					"text" : "read $1"
				}

			}
, 			{
				"box" : 				{
					"decodemode" : 1,
					"id" : "obj-2",
					"maxclass" : "live.drop",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 88.99999725818634, 56.333331942558289, 140.0, 60.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_invisible" : 1,
							"parameter_longname" : "live.drop",
							"parameter_shortname" : "live.drop",
							"parameter_type" : 4
						}

					}
,
					"varname" : "live.drop"
				}

			}
, 			{
				"box" : 				{
					"coll_data" : 					{
						"count" : 69,
						"data" : [ 							{
								"key" : 2023,
								"value" : [ 3573940, -2930 ]
							}
, 							{
								"key" : 2022,
								"value" : [ 3570750, -3190 ]
							}
, 							{
								"key" : 2021,
								"value" : [ 3566790, -3960 ]
							}
, 							{
								"key" : 2020,
								"value" : [ 3562040, -4750 ]
							}
, 							{
								"key" : 2019,
								"value" : [ 3556790, -5250 ]
							}
, 							{
								"key" : 2018,
								"value" : [ 3552120, -4670 ]
							}
, 							{
								"key" : 2017,
								"value" : [ 3539230, -12890 ]
							}
, 							{
								"key" : 2016,
								"value" : [ 3526390, -12840 ]
							}
, 							{
								"key" : 2015,
								"value" : [ 3513600, -12790 ]
							}
, 							{
								"key" : 2014,
								"value" : [ 3500860, -12740 ]
							}
, 							{
								"key" : 2013,
								"value" : [ 3488180, -12680 ]
							}
, 							{
								"key" : 2012,
								"value" : [ 3475560, -12620 ]
							}
, 							{
								"key" : 2011,
								"value" : [ 3462940, -12620 ]
							}
, 							{
								"key" : 2010,
								"value" : [ 3460725, -2215 ]
							}
, 							{
								"key" : 2009,
								"value" : [ 3437890, -22835 ]
							}
, 							{
								"key" : 2008,
								"value" : [ 3425570, -12320 ]
							}
, 							{
								"key" : 2007,
								"value" : [ 3413370, -12200 ]
							}
, 							{
								"key" : 2006,
								"value" : [ 3401230, -12140 ]
							}
, 							{
								"key" : 2005,
								"value" : [ 3394000, -7230 ]
							}
, 							{
								"key" : 2004,
								"value" : [ 3388150, -5850 ]
							}
, 							{
								"key" : 2003,
								"value" : [ 3390460, 2310 ]
							}
, 							{
								"key" : 2002,
								"value" : [ 3391090, 630 ]
							}
, 							{
								"key" : 2001,
								"value" : [ 3388440, -2650 ]
							}
, 							{
								"key" : 2000,
								"value" : [ 3384420, -4020 ]
							}
, 							{
								"key" : 1999,
								"value" : [ 3392760, 8340 ]
							}
, 							{
								"key" : 1998,
								"value" : [ 3412300, 19540 ]
							}
, 							{
								"key" : 1997,
								"value" : [ 3442270, 29970 ]
							}
, 							{
								"key" : 1996,
								"value" : [ 3462960, 20690 ]
							}
, 							{
								"key" : 1995,
								"value" : [ 3471400, 8440 ]
							}
, 							{
								"key" : 1994,
								"value" : [ 3473700, 2300 ]
							}
, 							{
								"key" : 1993,
								"value" : [ 3470550, -3150 ]
							}
, 							{
								"key" : 1992,
								"value" : [ 3455880, -14670 ]
							}
, 							{
								"key" : 1991,
								"value" : [ 3439840, -16040 ]
							}
, 							{
								"key" : 1990,
								"value" : [ 3421660, -18180 ]
							}
, 							{
								"key" : 1989,
								"value" : [ 3381100, -40560 ]
							}
, 							{
								"key" : 1988,
								"value" : [ 3253960, -127140 ]
							}
, 							{
								"key" : 1987,
								"value" : [ 3272990, 19030 ]
							}
, 							{
								"key" : 1986,
								"value" : [ 3095450, -177540 ]
							}
, 							{
								"key" : 1985,
								"value" : [ 3060480, -34970 ]
							}
, 							{
								"key" : 1984,
								"value" : [ 3042740, -17740 ]
							}
, 							{
								"key" : 1983,
								"value" : [ 3041330, -1410 ]
							}
, 							{
								"key" : 1982,
								"value" : [ 3048490, 7160 ]
							}
, 							{
								"key" : 1981,
								"value" : [ 3051540, 3050 ]
							}
, 							{
								"key" : 1980,
								"value" : [ 3056080, 4540 ]
							}
, 							{
								"key" : 1979,
								"value" : [ 3070800, 14720 ]
							}
, 							{
								"key" : 1978,
								"value" : [ 3085570, 14770 ]
							}
, 							{
								"key" : 1977,
								"value" : [ 3100410, 14840 ]
							}
, 							{
								"key" : 1976,
								"value" : [ 3115300, 14890 ]
							}
, 							{
								"key" : 1975,
								"value" : [ 3130310, 15010 ]
							}
, 							{
								"key" : 1974,
								"value" : [ 3145360, 15050 ]
							}
, 							{
								"key" : 1973,
								"value" : [ 3160490, 15130 ]
							}
, 							{
								"key" : 1972,
								"value" : [ 3175670, 15180 ]
							}
, 							{
								"key" : 1971,
								"value" : [ 3190960, 15290 ]
							}
, 							{
								"key" : 1970,
								"value" : [ 3206310, 15350 ]
							}
, 							{
								"key" : 1969,
								"value" : [ 3212280, 5970 ]
							}
, 							{
								"key" : 1968,
								"value" : [ 3222250, 9970 ]
							}
, 							{
								"key" : 1967,
								"value" : [ 3232250, 10000 ]
							}
, 							{
								"key" : 1966,
								"value" : [ 3247250, 15000 ]
							}
, 							{
								"key" : 1965,
								"value" : [ 3252260, 5010 ]
							}
, 							{
								"key" : 1964,
								"value" : [ 3262250, 9990 ]
							}
, 							{
								"key" : 1963,
								"value" : [ 3272350, 10100 ]
							}
, 							{
								"key" : 1962,
								"value" : [ 3282530, 10180 ]
							}
, 							{
								"key" : 1961,
								"value" : [ 3292710, 10180 ]
							}
, 							{
								"key" : 1960,
								"value" : [ 3303290, 10580 ]
							}
, 							{
								"key" : 1959,
								"value" : [ 3314400, 11110 ]
							}
, 							{
								"key" : 1958,
								"value" : [ 3326290, 11890 ]
							}
, 							{
								"key" : 1957,
								"value" : [ 3338100, 11810 ]
							}
, 							{
								"key" : 1956,
								"value" : [ 3349760, 11660 ]
							}
, 							{
								"key" : 1955,
								"value" : [ 3357620, 7860 ]
							}
 ]
					}
,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 88.99999725818634, 225.00000011920929, 356.333341300487518, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 1,
						"precision" : 6
					}
,
					"text" : "coll @embed 1"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"order" : 1,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"order" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-15", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-2" : [ "live.drop", "live.drop", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [  ],
		"autosave" : 0
	}

}
