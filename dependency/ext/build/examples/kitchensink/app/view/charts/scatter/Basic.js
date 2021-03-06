Ext.define('KitchenSink.view.charts.scatter.Basic', {
    extend: 'Ext.Panel',
    xtype: 'basic-scatter',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    exampleDescription: [
        'A basic scatter chart or scatter plot uses Cartesian coordinates to display values for two variables for a set of data. The data is displayed as a collection of points, each having the value of one variable on the horizontal axis and the value of the other variable vertical axis.'
    ],

    themes: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },
    // </example>

    initComponent: function() {
        var me = this;

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['x', 'y' ],
            data: [
                { x: 5, y: 20 },
                { x: 480, y: 90 },
                { x: 250, y: 50 },
                { x: 100, y: 33 },
                { x: 330, y: 95 },
                { x: 410, y: 12 },
                { x: 475, y: 44 },
                { x: 25, y: 67 },
                { x: 85, y: 21 },
                { x: 220, y: 88 },
                { x: 320, y: 79 },
                { x: 270, y: 32 }
            ]
        });

        //<example>
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                '->',
            {
                text: 'Preview',
                handler: function() {
                    me.down('cartesian').preview();
                }
            }]
        }];
        //</example>

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 410,
            store: this.myDataStore,
            insetPadding: 40,
            interactions: 'itemhighlight',
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: ['x'],
                grid: true
            }, {
                type: 'numeric',
                position: 'left',
                fields: ['y'],
                grid: true
            }],
            items: [{
                type: 'text',
                text: 'Scatter Charts - Basic',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }],
            series: [{
                type: 'scatter',
                xField: 'x',
                yField: 'y',
                showInLegend: true,
                markerConfig: {
                    radius: 4
                },
                highlightCfg: {
                    fillStyle: 'yellow',
                    radius: 7,
                    lineWidth: 2
                },
                label: {
                    display: 'over',
                    font: '18px',
                    renderer: function(value, label, storeItem, item, i, display, animation, index) {
                        return storeItem.get('x') + ',' + storeItem.get('y');
                    }
                }
            }]
        //<example>
        }, {
            style: 'padding-top: 10px;',
            xtype: 'gridpanel',
            columns : {
                defaults: {
                    sortable: false,
                    menuDisabled: true
                },
                items: [
                    { text: 'X-Axis', dataIndex: 'x' },
                    { text: 'Y-Axis', dataIndex: 'y' }
                ]
            },
            store: this.myDataStore,
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
