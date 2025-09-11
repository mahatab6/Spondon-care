import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Stethoscope,
    Calendar,
    UserCheck,
    Heart
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#00A8E8]/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Logo and About Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img
                                src="https://i.ibb.co/3ycwWWR/Logo-2.png"
                                alt="Medical Logo"
                                className="h-12 w-auto mb-4"
                            />
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Providing exceptional healthcare services with compassion and expertise. Your health and well-being are our top priorities.
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#0E6BA8] transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#0E6BA8] transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#0E6BA8] transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#0E6BA8] transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#0E6BA8] font-semibold text-lg mb-6 flex items-center">
                            <Stethoscope className="mr-2" size={20} />
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">General Medicine</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Cardiology</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Pediatrics</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Emergency Care</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Laboratory Services</a></li>
                        </ul>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h3 className="text-[#0E6BA8] font-semibold text-lg mb-6 flex items-center">
                            <Calendar className="mr-2" size={20} />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Book Appointment</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Our Doctors</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Patient Portal</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Health Resources</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#00A8E8] transition-colors duration-300">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-[#0E6BA8] font-semibold text-lg mb-6 flex items-center">
                            <UserCheck className="mr-2" size={20} />
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="text-[#90E0EF] mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-600 text-sm">123 Medical Center Drive</p>
                                    <p className="text-gray-600 text-sm">Healthcare City, HC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="text-[#90E0EF] flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                                    <p className="text-xs text-gray-500">24/7 Emergency Line</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="text-[#90E0EF] flex-shrink-0" size={16} />
                                <p className="text-gray-600 text-sm">info@healthcare.com</p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="text-[#90E0EF] mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Office Hours:</p>
                                    <p className="text-gray-600 text-xs">Mon-Fri: 8:00 AM - 8:00 PM</p>
                                    <p className="text-gray-600 text-xs">Sat-Sun: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Notice */}
                <div className="bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-center space-x-3 text-white">
                        <Heart className="text-[#90E0EF] animate-pulse" size={24} />
                        <div className="text-center">
                            <h4 className="font-bold text-lg">24/7 Emergency Services Available</h4>
                            <p className="text-sm opacity-90">Call (555) 911-HELP for immediate medical assistance</p>
                        </div>
                        <Heart className="text-[#90E0EF] animate-pulse" size={24} />
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <p className="text-gray-500 text-sm">
                                © 2024 Healthcare Center. All rights reserved.
                            </p>
                            <div className="flex space-x-4 text-sm">
                                <a href="#" className="text-gray-500 hover:text-[#0E6BA8] transition-colors duration-300">Privacy Policy</a>
                                <span className="text-gray-300">|</span>
                                <a href="#" className="text-gray-500 hover:text-[#0E6BA8] transition-colors duration-300">Terms of Service</a>
                                <span className="text-gray-300">|</span>
                                <a href="#" className="text-gray-500 hover:text-[#0E6BA8] transition-colors duration-300">HIPAA Notice</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Accredited by</span>
                            <div className="flex space-x-2">
                                <span className="bg-[#0E6BA8] text-white px-2 py-1 rounded text-xs font-bold">JCI</span>
                                <span className="bg-[#00A8E8] text-white px-2 py-1 rounded text-xs font-bold">ISO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;