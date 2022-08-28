import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false //true: capitalizar la etiqueta
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true //true: capitalizar la etiqueta
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' // primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary' // primary | secondary | tertiary
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#ffffff',
    backgroundColor: '#000000'
}
