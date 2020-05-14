import {
    Button,
    Menu,
    MenuDivider,
    MenuItem,
    Popover,
    Position,
} from '@blueprintjs/core'
import { Example } from '@blueprintjs/docs-theme'
import * as React from 'react'

interface DropdownMenuExample {
    props: any
}

class DropdownMenuExample extends React.PureComponent<DropdownMenuExample> {
    public render() {
        const exampleMenu = (
            <Menu>
                <MenuItem icon="graph" text="Graph" />
                <MenuItem icon="map" text="Map" />
                <MenuItem
                    icon="th"
                    text="Table"
                    shouldDismissPopover={false}
                />
                <MenuItem
                    icon="zoom-to-fit"
                    text="Nucleus"
                    disabled={true}
                />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                    <MenuItem
                        icon="add"
                        text="Add new application"
                        disabled={true}
                    />
                    <MenuItem icon="remove" text="Remove application" />
                </MenuItem>
            </Menu>
        )
        return (
            <Example options={false} {...this.props}>
                <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
                    <Button icon="share" text="Open in..." />
                </Popover>
            </Example>
        )
    }
}

export default DropdownMenuExample
