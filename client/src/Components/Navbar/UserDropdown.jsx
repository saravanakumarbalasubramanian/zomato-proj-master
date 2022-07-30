import { Menu } from '@headlessui/react';
import { FaUserAlt } from "react-icons/fa";

function UserDropdown() {
    return (
        <Menu>
            <Menu.Button>
                <span className='border p-2 border-grey-500 text-zomato-400 rounded-full'>
                    <FaUserAlt />
                </span>
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                        <button>
                            Signin
                        </button>
                </Menu.Item>
                <Menu.Item>
                        <button>
                            Signup
                        </button>
                </Menu.Item>

            </Menu.Items>
        </Menu>
    )
}

export default UserDropdown;