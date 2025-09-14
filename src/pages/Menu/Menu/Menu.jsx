import menuBg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladbg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu, loading] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    if (loading) return <p className="text-center text-red-500 mt-11">loading...</p>

    return (
        <div>
            <Cover img={menuBg} title='OUR MENU' subTitle='would you like to try a dish?'></Cover>
            {/* main cover  */}
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't Miss"> </SectionTitle>

            {/* offered menu item */}
            <MenuCategory item={offered}></MenuCategory>

            {/* desert menu item  */}
            <MenuCategory item={dessert} title='dessert' coverImg={dessertBg}></MenuCategory>

            {/* pizza menu item  */}
            <MenuCategory item={pizza} title='pizza' coverImg={pizzaBg}></MenuCategory>

            {/* salad menu item  */}
            <MenuCategory item={salad} title='salad' coverImg={saladbg}></MenuCategory>

            {/* soup menu item  */}
            <MenuCategory item={soup} title='soup' coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;